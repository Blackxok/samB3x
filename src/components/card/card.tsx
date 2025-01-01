import cn from 'classnames'
import style from './card.module.css'
import { CardProps } from './card.props'

export default function Card({ children, color, className, ...props }: CardProps): JSX.Element {
	return (
		<div
			className={cn(style.card, className, {
				[style.primary]: color === 'primary',
			})}
			{...props}
		>
			{children}
		</div>
	)
}
