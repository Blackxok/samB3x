import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export interface TagProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	size?: 's' | 'm'
	color?: 're' | 'gr' | 'pr'
	children: ReactNode
}
