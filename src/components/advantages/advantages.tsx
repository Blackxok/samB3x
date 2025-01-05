import { FaCheck } from 'react-icons/fa'
import Divider from '../divider/divider'
import styles from './advantages.module.css'
import { AdvantAgesProps } from './advantages.props'
export default function Advantages({ advantages }: AdvantAgesProps): JSX.Element {
	return (
		<>
			{advantages.map(e => (
				<div key={e.id} className={styles.advantage}>
					<FaCheck className={styles.checkIcon} />
					<div className={styles.title}>{e.title}</div>
					<Divider className={styles.vLine} />
					<div className={styles.description}>{e.description}</div>
				</div>
			))}
		</>
	)
}
