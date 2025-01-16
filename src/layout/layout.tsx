import { useRouter } from 'next/router'
import { FunctionComponent } from 'react'
import { ScrollUp } from '../components'
import { AppContextProvider, IAppContext } from '../context/app.context'
import Footer from './footer/footer'
import Header from './header/header'
import styles from './layout.module.css'
import { LayoutProps } from './layout.props'
import Sidebar from './sidebar/sidebar'

const Layout = ({ children }: LayoutProps): JSX.Element => {
	return (
		<div className={styles.wrapper}>
			<Header className={styles.header} />
			<Sidebar className={styles.sidebar} />
			<div className={styles.body}>{children}</div>
			<Footer className={styles.footer} />
			<ScrollUp />
		</div>
	)
}

export const withLayout = <T extends Record<string, unknown> & IAppContext>(
	Component: FunctionComponent<T>,
) => {
	return function withLayoutComponent(props: T): JSX.Element {
		const router = useRouter()
		return (
			<AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
				{router.asPath === '/' ? (
					<Component {...props} />
				) : (
					<Layout>
						<Component {...props} />
					</Layout>
				)}
			</AppContextProvider>
		)
	}
}
