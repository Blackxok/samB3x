import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface ReviewFormProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	productid: string
}

export interface IReviewResponse {
	name: string
	titles: string
	description: string
	productid: string
	rating: number
	id: number
}
