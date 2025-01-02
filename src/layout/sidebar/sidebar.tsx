import Menu from '../menu/menu'
import { SidebarProps } from './sidebar.props'

export default function Sidebar({ ...props }: SidebarProps): JSX.Element {
	return (
		<div {...props}>
			<Menu />
		</div>
	)
}
