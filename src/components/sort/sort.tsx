import cn from 'classnames'
import { FaFilter } from 'react-icons/fa'
import styles from './sort.module.css'
import { SortEnum, SortProps } from './sort.props'

const Sort = ({ setSort, sort = SortEnum.Price, className, ...props }: SortProps): JSX.Element => {
	return (
		<div className={cn(className, styles.sort)} {...props}>
			<span
				className={cn({
					[styles.active]: sort == SortEnum.Rating,
				})}
				onClick={() => setSort(SortEnum.Rating)}
			>
				<FaFilter className={styles.sortIcon} /> Rating
			</span>

			<span
				className={cn({
					[styles.active]: sort == SortEnum.Price,
				})}
				onClick={() => setSort(SortEnum.Price)}
			>
				<FaFilter className={styles.sortIcon} /> Price
			</span>
		</div>
	)
}

export default Sort
