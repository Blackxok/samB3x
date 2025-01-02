import { FunctionComponent } from 'react'
import { AppContextProvider, IAppContext } from '../context/app.context'
import Footer from './footer/footer'
import Header from './header/header'
import styles from './layout.module.css'
import { LayoutProps } from './layout.props'
import Sidebar from './sidebar/sidebar'

function Layout({ children }: LayoutProps): JSX.Element {
	return (
		<div className={styles.wrapper}>
			<Header className={styles.header} />
			<Sidebar className={styles.sidebar} />
			<div className={styles.body}>{children}</div>
			<Footer className={styles.footer} />
		</div>
	)
}
export const withLayout = <T extends Record<string, unknown> & IAppContext>(
	Component: FunctionComponent<T>,
) => {
	return function withLayoutComponent(props: T): JSX.Element {
		return (
			<Layout>
				<AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
					<Component {...props} />
				</AppContextProvider>
			</Layout>
		)
	}
}
