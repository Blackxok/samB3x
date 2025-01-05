import { FaUser } from 'react-icons/fa'
import Rating from '../rating/rating'
import styles from './review.module.css'
import { ReviewProps } from './review.props'

const Review = ({ review }: ReviewProps): JSX.Element => {
	return (
		<div className={styles.review}>
			<FaUser className={styles.user} />
			<div className={styles.title}>
				<span className={styles.name}>{review.name}</span>
				<span>{review.title}</span>
			</div>

			<div className={styles.rating}>
				<Rating rating={review.rating} />
			</div>

			<div className={styles.description}>{review.description}</div>
		</div>
	)
}

export default Review
