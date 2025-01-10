import cn from 'classnames'
import { ForwardedRef, forwardRef } from 'react'
import styles from './text-area.module.css'
import { TextAreaProps } from './text-area.props'

const Input = forwardRef(
	({ className, ...props }: TextAreaProps, ref: ForwardedRef<HTMLTextAreaElement>): JSX.Element => {
		return <textarea className={cn(styles.textArea, className)} {...props} ref={ref} />
	},
)

export default Input
