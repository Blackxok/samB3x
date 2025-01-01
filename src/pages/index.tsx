import axios from 'axios'
import { GetServerSideProps } from 'next'
import { useState } from 'react'
import { Button, Card, Heading, Input, Rating, Tag, Text } from '../components'
import Textarea from '../components/textarea/textarea'
import { withLayout } from '../layout/layout'

function Home() {
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
		</>
	)
}
export default withLayout(Home)

export const getServerSideProps: GetServerSideProps = async () => {
	const { data } = await axios.post('http://localhost:3000/api/page-find', { firstCategory: 1 })
	return {
		props: {
			data: data,
		},
	}
}
