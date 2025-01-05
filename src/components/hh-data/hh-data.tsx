import { MdStar } from 'react-icons/md'
import Card from '../card/card'
import styles from './hh-data.module.css'
import { IhhData } from './hh-data.props'
export default function HhData({
	count,
	juniorSalary,
	middleSalary,
	seniorSalary,
}: IhhData): JSX.Element {
	return (
		<div className={styles.hh}>
			<Card className={styles.count}>
				<div className={styles.title}>All Vacation</div>
				<div className={styles.countValue}>{count}</div>
			</Card>
			<Card className={styles.salary}>
				<div>
					<div className={styles.title}>Junior</div>
					<div className={styles.salaryValue}>{juniorSalary}$</div>
					<div className={styles.rate}>
						<MdStar size={40} color='red' />
						<MdStar size={40} />
						<MdStar size={40} />
					</div>
				</div>
				<div>
					<div className={styles.title}>Middle</div>
					<div className={styles.salaryValue}>{middleSalary}$</div>
					<div className={styles.rate}>
						<MdStar size={40} color='red' />
						<MdStar size={40} color='red' />
						<MdStar size={40} />
					</div>
				</div>
				<div>
					<div className={styles.title}>Senior</div>
					<div className={styles.salaryValue}>{seniorSalary}$</div>
					<div className={styles.rate}>
						<MdStar size={40} color='red' />
						<MdStar size={40} color='red' />
						<MdStar size={40} color='red' />
					</div>
				</div>
			</Card>
		</div>
	)
}
