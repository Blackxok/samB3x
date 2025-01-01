import cn from 'classnames'
import styles from './footer.module.css'
import { FooterProps } from './footer.props'

export default function Footer({ className, ...props }: FooterProps): JSX.Element {
	return (
		<footer className={cn(styles.footer, className)} {...props}>
			<div className={styles.container}>
				<div className={styles.logo}>MyBrand</div>
				<div className={styles.links}>
					<a href='/about'>Biz haqimizda</a>
					<a href='/services'>Xizmatlar</a>
					<a href='/contact'>Bog'lanish</a>
				</div>
				<div className={styles.social}>
					<a href='#' aria-label='Facebook'>
						📘
					</a>
					<a href='#' aria-label='Twitter'>
						🐦
					</a>
					<a href='#' aria-label='Instagram'>
						📸
					</a>
				</div>
			</div>
			<div className={styles.bottom}>
				&copy; {new Date().getFullYear()} MyBrand. Barcha huquqlar himoyalangan.
			</div>
		</footer>
	)
}
