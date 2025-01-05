import cn from 'classnames'
import { format } from 'date-fns'
import { FaBook, FaChalkboardTeacher, FaGraduationCap } from 'react-icons/fa'
import styles from './footer.module.css'
import { FooterProps } from './footer.props'

const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
	return (
		<footer className={cn(className, styles.footer)} {...props}>
			<div className={styles.topSection}>
				<div className={styles.logo}>CodeSchool</div>
				<nav className={styles.navLinks}>
					<a href='#' className={styles.link}>
						<FaBook /> Courses
					</a>
					<a href='#' className={styles.link}>
						<FaGraduationCap /> Degrees
					</a>
					<a href='#' className={styles.link}>
						<FaChalkboardTeacher /> Webinars
					</a>
				</nav>
			</div>
			<div className={styles.bottomSection}>
				<p className={styles.copy}> © 2023 - {format(new Date(), 'yyyy')}. All rights reserved.</p>
				<div className={styles.policyLinks}>
					<a href='#' className={styles.policy}>
						Terms of Use
					</a>
					<a href='#' className={styles.policy}>
						Privacy Policy
					</a>
				</div>
			</div>
		</footer>
	)
}

export default Footer
