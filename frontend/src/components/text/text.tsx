import cn from 'classnames'
import style from './text.module.css'
import { TextProps } from './text.props'

export default function text({ size = 'm', children, ...props }: TextProps): JSX.Element {
	return (
		<p
			className={cn(style.p, {
				[style.s]: size === 's',
				[style.m]: size === 'm',
				[style.l]: size === 'l',
			})}
			{...props}
		>
			{children}
		</p>
	)
}
