import cn from 'classnames'
import style from './tag.module.css'
import { TagProps } from './tag.props'

export default function Tag({
	size = 'm',
	color = 'pr',
	children,
	...props
}: TagProps): JSX.Element {
	return (
		<div
			className={cn(style.tag, {
				[style.s]: size === 's',
				[style.m]: size === 'm',
				[style.pr]: color === 'pr',
				[style.gr]: color === 'gr',
				[style.re]: color === 're',
			})}
			{...props}
		>
			{children}
		</div>
	)
}
