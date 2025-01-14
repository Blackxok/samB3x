import { motion } from 'framer-motion'
import { ReactElement } from 'react'
import { useScrollY } from '../../hooks/useScrollY'
import IconButton from '../icon-button/icon-button'
import styles from './scroll-up.module.css'

const ScrollUp = (): ReactElement | null => {
	const scrollY = useScrollY()
	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}
	if (scrollY <= 150) return null

	return (
		<motion.div
			initial={{ y: 100, opacity: 0 }}
			animate={{ y: 0, opacity: 1, transition: { duration: 0.6 } }}
			exit={{ y: 100, opacity: 0, transition: { duration: 0.6 } }}
			whileHover={{
				scale: 1.2,
				transition: { duration: 0.2 },
			}}
			className={styles.scrollUp}
			onClick={scrollToTop}
		>
			<IconButton icon='up' appearance='primary' onClick={scrollToTop} />
		</motion.div>
	)
}
export default ScrollUp
