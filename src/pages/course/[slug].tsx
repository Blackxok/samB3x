import { MenuItem } from '@/src/interface/menu.interface'
import { PageModel } from '@/src/interface/page.interface'
import { withLayout } from '@/src/layout/layout'
import axios from 'axios'
import { GetServerSideProps } from 'next'

function Index({ menu, page, products }: PageProps) {
	console.log(products)

	return <div>in the slug</div>
}

export default withLayout(Index)

export const getServerSideProps: GetServerSideProps<PageProps> = async ({ query }) => {
	const { slug } = query
	const firstCategory = 0

	if (!slug) {
		return {
			redirect: {
				destination: '/login',
				permanent: false,
			},
		}
	}
	const { data: menu } = await axios.post<MenuItem[]>(
		`${process.env.NEXT_PUBLIC_API_URL}/api/page-find`,
		{
			firstCategory,
		},
	)
	const { data: page } = await axios.get<PageModel[]>(
		`${process.env.NEXT_PUBLIC_API_URL}/api/page-find/${slug}`,
	)
	const { data: products } = await axios.post<ProductModel[]>(
		`${process.env.NEXT_PUBLIC_API_URL}/api/product-find`,
		{ category: slug },
	)

	return { props: { menu, page, products } }
}

export interface PageProps extends Record<string, unknown> {
	menu: MenuItem[]
	page: PageModel[]
	products: ProductModel[]
}
