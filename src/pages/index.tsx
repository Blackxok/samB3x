import axios from 'axios'
import { GetServerSideProps } from 'next'
import { useState } from 'react'
import { Heading } from '../components'
import { MenuItem } from '../interfaces/menu.interface'
import { withLayout } from '../layout/layout'

const Index = (): JSX.Element => {
	const [isClick, setIsClick] = useState(false)
	const [rating, setRating] = useState<number>(4)

	return (
		<>
			<Heading tag='h2'>Heading</Heading>
		</>
	)
}

export default withLayout(Index)

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
	const firstCategory = 1
	const { data: menu } = await axios.post<MenuItem[]>(
		`${process.env.NEXT_PUBLIC_DOMAIN}/api/page-find`,
		{ firstCategory },
	)

	return {
		props: {
			menu,
			firstCategory,
		},
	}
}

interface HomeProps extends Record<string, unknown> {
	firstCategory: number
	menu: MenuItem[]
}
