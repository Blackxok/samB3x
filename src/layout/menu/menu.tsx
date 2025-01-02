import { AppContext } from '@/src/context/app.context'
import { IfirstLevelMenu, PageItem } from '@/src/interface/menu.interface'
import { PageCategory } from '@/src/interface/page.interface'
import cn from 'classnames'
import Link from 'next/link'
import { useContext } from 'react'
import { FaBook, FaChalkboardTeacher } from 'react-icons/fa'
import styles from './menu.module.css'

const firstLevelMenu: IfirstLevelMenu[] = [
	{ route: 'courses', name: 'Courses', icon: <FaChalkboardTeacher />, id: PageCategory.Courses },
	{ route: 'books', name: 'Books', icon: <FaBook />, id: PageCategory.Books },
]
export default function Menu(): JSX.Element {
	const { menu, firstCategory, setMenu } = useContext(AppContext)

	const buildFirstLevel = () => {
		return (
			<>
				{firstLevelMenu.map(c => (
					<div key={c.route}>
						<>
							<Link href={`/${c.route}`}>
								<div
									className={cn(styles.firstLevel, {
										[styles.firstLevelActive]: c.id === firstCategory,
									})}
								>
									{c.icon}
									<span>{c.name}</span>
								</div>
							</Link>
							{c.id === firstCategory && buildSecondLevel(c)}
						</>
					</div>
				))}
			</>
		)
	}
	const buildSecondLevel = (menuItem: IfirstLevelMenu) => {
		return (
			<div className={styles.secondBlock}>
				{menu.map(q => (
					<div key={q._id.secondCategory}>
						<div className={styles.secondLevel}>{q._id.secondCategory}</div>
						<div
							className={cn(styles.secondLevelBlock, {
								[styles.secondLevelBlockActive]: q.isOpen,
							})}
						>
							{buildThirdLevel(q.pages, menuItem.route)}
						</div>
					</div>
				))}
			</div>
		)
	}

	const buildThirdLevel = (pages: PageItem[], route: string) => {
		return pages.map(w => (
			<Link
				key={w._id}
				href={`/${route}/${w.alias}`}
				className={cn(styles.thirdLevel, {
					[styles.thirdLevelActive]: true,
				})}
			>
				{w.title}17.42
			</Link>
		))
	}

	return <div className={styles.menu}>{buildFirstLevel()}</div>
}
