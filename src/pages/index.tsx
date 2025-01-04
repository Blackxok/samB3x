import axios from 'axios'
import { GetServerSideProps } from 'next'
import { useState } from 'react'
import { Button, Card, Heading, Input, Rating, Tag, Text } from '../components'
import Textarea from '../components/textarea/textarea'
import { MenuItem } from '../interface/menu.interface'
import { withLayout } from '../layout/layout'

function Home({ firstCategory, menu }: HomeProps): JSX.Element {
	const [isClicked, setIsClicked] = useState(false)
	const [rating, setRating] = useState<number>(4)

	return (
		<>
			<Heading tag='h1'>Assalomu alekum</Heading>
			<Text>something</Text>
			<Tag color='re'>some</Tag>
			<Tag color='gr'>some</Tag>
			<Tag color='pr'>some</Tag>
			<Button appearance='primary' arrow='right'>
				Button3
			</Button>
			<Button
				appearance='ghost'
				arrow={isClicked ? 'down' : 'right'}
				onClick={() => setIsClicked(e => !e)}
			>
				Button3
			</Button>
			<br />
			<br />
			<Input placeholder='Enter your text' />
			<br />
			<br />
			<Textarea placeholder='Text' />
			<br />
			<Rating rating={rating} isEditable={true} setRating={setRating} />

			<Card color='white' style={{ marginTop: '20px' }}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, maiores!
			</Card>
			<Card color='primary' style={{ marginTop: '20px' }}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, maiores!
			</Card>

			<ol>
				{menu.map(m => (
					<li key={m._id.secondCategory}>{m._id.secondCategory}</li>
				))}
			</ol>
		</>
	)
}
export default withLayout(Home)

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
	const firstCategory = 1
	const { data: menu } = await axios.post<MenuItem[]>('http://localhost:3000/api/page-find', {
		firstCategory,
	})

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
