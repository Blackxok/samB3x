import { DetailedHTMLProps, HTMLAttributes } from 'react'
import close from './icons/close (1).svg'
import menu from './icons/menu.svg'
import up from './icons/up.svg'
export const icons = { up, close, menu }
export type Icontype = keyof typeof icons
export interface IconButtonProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	icon: Icontype
	appearance: 'primary' | 'white'
}
