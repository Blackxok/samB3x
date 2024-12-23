import { ReactNode } from 'react'

export interface IHeading {
	tag: 'h1' | 'h2' | 'h3'
	children: ReactNode
}
