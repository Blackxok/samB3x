import { FunctionComponent } from 'react'
import Footer from './footer/footer'
import Header from './header/header'
import { LayoutProps } from './layout.props'
import Sidebar from './sidebar/sidebar'

function Layout({ children }: LayoutProps): JSX.Element {
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
export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
	return function withLayoutComponent(props: T): JSX.Element {
		return (
			<Layout>
				<Component {...props} />
			</Layout>
		)
	}
}
