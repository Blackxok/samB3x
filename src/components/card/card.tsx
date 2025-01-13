import cn from 'classnames'
import { ForwardedRef, forwardRef } from 'react'
import styles from './card.module.css'
import { CardProps } from './card.props'

const Card = forwardRef(
	(
		{ children, color = 'primary', className, ...props }: CardProps,
		ref: ForwardedRef<HTMLDivElement>,
	): JSX.Element => {
		return (
			<div
				ref={ref}
				className={cn(styles.card, className, {
					[styles.primary]: color === 'primary',
				})}
				{...props}
			>
				{children}
			</div>
		)
	},
)

export default Card
