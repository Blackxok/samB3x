import cn from 'classnames'
import ArrowRight from './arrow.svg'
import style from './button.module.css'
import { ButtonProps } from './button.props'
export default function Button({
	children,
	appearance,
	arrow = 'none',
	...props
}: ButtonProps): JSX.Element {
	return (
		<button
			className={cn(style.button, {
				[style.primary]: appearance === 'primary',
				[style.ghost]: appearance === 'ghost',
			})}
			{...props}
		>
			{children}
			{arrow !== 'none' && (
				<span
					className={cn(style.arrow, {
						[style.down]: arrow === 'down',
						[style.right]: arrow === 'right',
					})}
				>
					<ArrowRight />
				</span>
			)}
		</button>
	)
}
