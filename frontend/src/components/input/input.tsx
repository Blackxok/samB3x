import cn from 'classnames'
import style from './input.module.css'
import { InputProps } from './input.props'
export default function Input({ className, ...props }: InputProps): JSX.Element {
	return <input className={cn(style.input, className)} {...props} />
}
