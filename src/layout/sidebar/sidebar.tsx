import cn from 'classnames'
import Link from 'next/link'
import { Divider, Search } from '../../components'
import Logo from '../logoDark.svg'
import Menu from '../menu/menu'
import { SidebarProps } from './header.props'
import styles from './sidebar.module.css'

const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
	return (
		<div className={cn(className, styles.sidebar)} {...props}>
			<Link href={'/'} style={{ textAlign: 'center' }}>
				<Logo />
				<Divider />
			</Link>
			<Search />
			<Menu />
		</div>
	)
}

export default Sidebar
