import { AppContext } from '@/src/context/app.context'
import { IfirstLevelMenu, PageItem } from '@/src/interface/menu.interface'
import { PageCategory } from '@/src/interface/page.interface'
import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext, useState } from 'react'
import { FaBook, FaChalkboardTeacher } from 'react-icons/fa'
import styles from './menu.module.css'

export const firstLevelMenu: IfirstLevelMenu[] = [
	{ route: 'courses', name: 'Courses', icon: <FaChalkboardTeacher />, id: PageCategory.Courses },
	{ route: 'books', name: 'Books', icon: <FaBook />, id: PageCategory.Books },
]
export default function Menu(): JSX.Element {
	const { menu, firstCategory, setMenu } = useContext(AppContext)
	const [isOpen, setIsOpen] = useState<string[]>([])
	const router = useRouter()

	const toggleCategories = (secondCategory: string) => {
		setIsOpen(prev =>
			prev.includes(secondCategory)
				? prev.filter(e => e !== secondCategory)
				: [...prev, secondCategory],
		)
	}

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
						<div
							className={styles.secondLevel}
							onClick={() => toggleCategories(q._id.secondCategory)}
						>
							{q._id.secondCategory}
						</div>
						<div
							className={cn(styles.secondLevelBlock, {
								[styles.secondLevelBlockActive]: isOpen.includes(q._id.secondCategory),
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
					[styles.thirdLevelActive]: `/${route}/${w.alias}` === router.asPath,
				})}
			>
				{w.title}
			</Link>
		))
	}

	return <div className={styles.menu}>{buildFirstLevel()}</div>
}
