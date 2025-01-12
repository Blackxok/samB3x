import cn from 'classnames'
import { ForwardedRef, forwardRef } from 'react'
import styles from './input.module.css'
import { InputProps } from './input.props'

const Input = forwardRef(
	(
		{ className, error, ...props }: InputProps,
		ref: ForwardedRef<HTMLInputElement>,
	): JSX.Element => {
		return (
			<div className={styles.inputWrapper}>
				<input
					className={cn(styles.input, className, {
						[styles.error]: error,
					})}
					{...props}
					ref={ref}
				/>
				{error && <span className={styles.errorMessage}>{error.message}</span>}
			</div>
		)
	},
)

export default Input
