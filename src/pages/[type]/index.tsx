import { MenuItem } from '@/src/interface/menu.interface'
import { withLayout } from '@/src/layout/layout'
import { firstLevelMenu } from '@/src/layout/menu/menu'
import axios from 'axios'
import { GetServerSideProps } from 'next'

function Type() {
	return <div>Type</div>
}

export default withLayout(Type)

export const getServerSideProps: GetServerSideProps<TypeProps> = async ({ query }) => {
	const { type } = query

	if (!type) {
		return { notFound: true }
	}

	const firstCategoryItem = firstLevelMenu.find(menu => menu.route === type)

	if (!firstCategoryItem) {
		return { notFound: true }
	}

	try {
		const { data: menu } = await axios.post<MenuItem[]>(
			`${process.env.NEXT_PUBLIC_API_URL}/api/page-find`,
			{
				firstCategory: firstCategoryItem.id,
			},
		)

		return {
			props: {
				menu,
				firstCategory: firstCategoryItem.id,
			},
		}
	} catch (error) {
		return { notFound: true }
	}
}

export interface TypeProps extends Record<string, unknown> {
	menu: MenuItem[]
	firstCategory: number
}
