import cn from 'classnames'
import Link from 'next/link'
import { Fa500Px } from 'react-icons/fa'
import Menu from '../menu/menu'
import styles from './sidebar.module.css'
import { SidebarProps } from './sidebar.props'

export default function Sidebar({ className, ...props }: SidebarProps): JSX.Element {
	return (
		<div className={cn(className, styles.sidebar)} {...props}>
			<Link href='/'>
				<div className={styles.logo}>
					<Fa500Px className={styles.logoIcon} />
					Logo
				</div>
			</Link>
			<Menu />
		</div>
	)
}
