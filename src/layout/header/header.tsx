import cn from 'classnames'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { IconButton } from '../../components'
import LogoIcon from '../logo.svg'
import Sidebar from '../sidebar/sidebar'
import styles from './header.module.css'
import { HeaderProps } from './header.props'

const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const toggleMenu = () => setIsOpen(prev => !prev)
	const variants = {
		opened: {
			opacity: 1,
			x: 0,
			transition: {
				stiffnes: 20,
			},
		},
		closed: {
			opacity: 0,
			x: '100%',
		},
	}
	return (
		<div className={cn(className, styles.header)} {...props}>
			<Link href={'/'}>
				<LogoIcon />
			</Link>
			<IconButton icon='menu' appearance='white' onClick={toggleMenu} />
			<motion.div
				variants={variants}
				initial={'closed'}
				animate={isOpen ? 'opened' : 'closed'}
				className={styles.mobileMenu}
			>
				<Sidebar />
				<IconButton
					className={styles.closeIcon}
					onClick={toggleMenu}
					icon={'close'}
					appearance={'white'}
				/>
			</motion.div>
		</div>
	)
}

export default Header
