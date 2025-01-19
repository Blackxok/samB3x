import { CoursePageComponent } from '@/src/page-components'
import axios from 'axios'
import { GetServerSideProps } from 'next'
import { firstLevelMenu } from '../../helpers/constants'
import { MenuItem } from '../../interfaces/menu.interface'
import { PageModel } from '../../interfaces/page.interface'
import { ProductModel } from '../../interfaces/product.interface'
import { withLayout } from '../../layout/layout'
import Seo from '@/src/layout/seo/seo'

const Index = ({ products, firstCategory, page }: PageProps) => {
	return (
		<Seo metaTitle={page.title} metaDescription={page.description} metaKeyword={page.tags.toString()}>
			<CoursePageComponent products={products} firstCategory={firstCategory} page={page} />
		</Seo>
	);
}

export default withLayout(Index)

export const getServerSideProps: GetServerSideProps<PageProps> = async ({ query }) => {
	const { slug, type } = query

	if (!slug) {
		return { notFound: true }
	}

	const firstCategoryItem = firstLevelMenu.find(c => c.route === type) ?? { id: 0 }

	const { data: menu } = await axios.post<MenuItem[]>(
		`${process.env.NEXT_PUBLIC_DOMAIN}/api/page-find`,
		{
			firstCategory: firstCategoryItem.id,
		},
	)
	const { data: page } = await axios.get<PageModel>(
		`${process.env.NEXT_PUBLIC_DOMAIN}/api/page-find/${slug}`,
	)
	const { data: products } = await axios.post<ProductModel[]>(
		`${process.env.NEXT_PUBLIC_DOMAIN}/api/product-find`,
		{
			category: slug,
		},
	)

	return {
		props: { menu, page, products, firstCategory: firstCategoryItem.id },
	}
}

interface PageProps extends Record<string, unknown> {
	menu: MenuItem[]
	page: PageModel
	products: ProductModel[]
	firstCategory: number
}
