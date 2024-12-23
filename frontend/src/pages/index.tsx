import { useState } from 'react'
import { Button, Card, Heading, Input, Rating, Tag, Text } from '../components'
import Textarea from '../components/textarea/textarea'

export default function Home() {
	const [isClicked, setIsClicked] = useState(false)
	const [rating, setRating] = useState<number>(4)

	return (
		<main className={`flex min-h-screen flex-col items-center justify-between p-24`}>
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
		</main>
	)
}
