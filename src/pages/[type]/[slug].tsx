import { MenuItem } from '@/src/interface/menu.interface'
import { PageModel } from '@/src/interface/page.interface'
import { withLayout } from '@/src/layout/layout'
import CoursePageComponent from '@/src/p-com/c-p-com/c-p-com'
import axios from 'axios'
import { GetServerSideProps } from 'next'

function Index({ menu, page, products, firstCategory }: PageProps) {
	return <CoursePageComponent products={products} firstCategory={firstCategory} page={page} />
}

export default withLayout(Index)

export const getServerSideProps: GetServerSideProps<PageProps> = async ({ query }) => {
	const { slug } = query
	const firstCategory = 0

	if (!slug) {
		return {
			notFound: true,
		}
	}

	try {
		const { data: menu } = await axios.post<MenuItem[]>(
			`${process.env.NEXT_PUBLIC_API_URL}/api/page-find`,
			{ firstCategory },
		)

		const { data: page } = await axios.get<PageModel>(
			`${process.env.NEXT_PUBLIC_API_URL}/api/page-find/${slug}`,
		)

		const { data: products } = await axios.post<ProductModel[]>(
			`${process.env.NEXT_PUBLIC_API_URL}/api/product-find`,
			{ category: slug },
		)

		return {
			props: { menu, page, products, firstCategory },
		}
	} catch (error) {
		console.error('Data olishda xato:', error)
		return {
			props: {
				menu: [],
				page: {} as PageModel,
				products: [],
				firstCategory,
			},
		}
	}
}

export interface PageProps extends Record<string, unknown> {
	menu: MenuItem[]
	page: PageModel
	products: ProductModel[]
	firstCategory: number
}

