import cn from 'classnames'
import style from './textarea.module.css'
import { TextareaProps } from './textarea.props'
export default function Textarea({ className, ...props }: TextareaProps): JSX.Element {
	return <textarea className={cn(style.textarea, className)} {...props} />
}
