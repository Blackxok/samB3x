import { SidebarProps } from './sidebar.props'

export default function Sidebar({ ...props }: SidebarProps): JSX.Element {
	return <div {...props}>Sidebar</div>
}
