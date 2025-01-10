import cn from 'classnames'
import { ForwardedRef, forwardRef } from 'react'
import styles from './input.module.css'
import { InputProps } from './input.props'

const Input = forwardRef(
	({ className, ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
		return <input className={cn(styles.input, className)} {...props} ref={ref} />
	},
)

export default Input
