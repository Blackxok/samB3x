import Footer from './footer/footer'
import Header from './header/header'
import { LayoutProps } from './layout.props'
import Sidebar from './sidebar/sidebar'

export default function Layout({ children }: LayoutProps): JSX.Element {
	return (
		<>
			<Header />
			<div>
				<Sidebar />
				<div>{children}</div>
			</div>
			<Footer />
		</>
	)
}
