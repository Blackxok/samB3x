import { HeaderProps } from './header.props'

export default function Header({ ...props }: HeaderProps): JSX.Element {
	return <div {...props}>Header</div>
}
