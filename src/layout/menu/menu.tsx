import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { AppContext } from '../../context/app.cotext'
import { firstLevelMenu } from '../../helpers/constants'
import { IFirstLevelMenu, PageItem } from '../../interfaces/menu.interface'
import styles from './menu.module.css'

const Menu = (): JSX.Element => {
	const { menu, firstCategory, setMenu } = useContext(AppContext)
	const reversedMenu = [...menu].reverse()
	const router = useRouter()

	const openSecondBlock = (category: string) => {
		if (setMenu) {
			setMenu(
				menu.map(c => (c._id.secondCategory === category ? { ...c, isOpened: !c.isOpened } : c)),
			)
		}
	}

	const buildFirstLevel = () => {
		return (
			<>
				{firstLevelMenu.map(c => (
					<div key={c.route}>
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
					</div>
				))}
			</>
		)
	}

	const buildSecondLevel = (menuItem: IFirstLevelMenu) => {
		return (
			<div className={styles.secondBlock}>
				{reversedMenu.map(q => {
					const isActive = q.pages.some(p => `/${menuItem.route}/${p._id}` === router.asPath)

					if (isActive) {
						q.isOpened = true
					}

					return (
						<div key={q._id.secondCategory}>
							<div
								className={styles.secondLevel}
								onClick={() => openSecondBlock(q._id.secondCategory)}
							>
								{q._id.secondCategory}
							</div>
							<div
								className={cn(styles.secondLevelBlock, {
									[styles.secondLevelBlockActive]: q.isOpened,
								})}
							>
								{buildThirdLevel(q.pages, menuItem.route)}
							</div>
						</div>
					)
				})}
			</div>
		)
	}

	const buildThirdLevel = (pages: PageItem[], route: string) => {
		return pages.map(p => (
			<Link
				key={p._id}
				href={`/${route}/${p._id}`}
				className={cn(styles.thirdLevel, {
					[styles.thirdLevelActive]: `/${route}/${p._id}` === router.asPath,
				})}
			>
				{p.title}
			</Link>
		))
	}

	return <div className={styles.menu}>{buildFirstLevel()}</div>
}

export default Menu
