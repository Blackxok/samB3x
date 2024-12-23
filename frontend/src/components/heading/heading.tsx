import style from './heading.module.css'
import { IHeading } from './heading.props'

export default function Heading({ tag, children }: IHeading): JSX.Element {
	switch (tag) {
		case 'h1':
			return <h1 className={style.h1}>{children}</h1>
		case 'h2':
			return <h1 className={style.h2}>{children}</h1>
		case 'h3':
			return <h1 className={style.h3}>{children}</h1>
		default:
			return <>{children}</>
	}
}
