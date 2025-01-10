import cn from 'classnames'
import { ForwardedRef, forwardRef, useEffect, useState } from 'react'
import styles from './rating.module.css'
import { RatingProps } from './rating.props'
import StarIcon from './star.svg'

const Rating = forwardRef(
	(
		{ rating, isEditabled = false, setRating, ...props }: RatingProps,
		ref: ForwardedRef<HTMLDivElement>,
	): JSX.Element => {
		const [ratingArray, setRatingArray] = useState<JSX.Element[]>([])

		useEffect(() => {
			renderRating(rating)
		}, [rating, isEditabled])

		const renderRating = (currentRating: number) => {
			setRatingArray(
				new Array(5).fill(null).map((_, idx) => (
					<span
						key={idx}
						role='button'
						aria-label={`Rate as ${idx + 1} stars`}
						className={cn(styles.star, {
							[styles.filled]: idx < currentRating,
							[styles.editable]: isEditabled,
						})}
						onMouseEnter={() => changeRatingDisplay(idx + 1)}
						onMouseLeave={() => changeRatingDisplay(rating)}
						onClick={() => clickRatingHandler(idx + 1)}
					>
						<StarIcon />
					</span>
				)),
			)
		}

		const changeRatingDisplay = (index: number) => {
			if (isEditabled) {
				renderRating(index)
			} else {
				renderRating(rating)
			}
		}

		const clickRatingHandler = (index: number) => {
			if (isEditabled && setRating) {
				setRating(index)
			}
		}

		return (
			<div className={styles.rating} ref={ref} {...props}>
				{ratingArray.map((rating, idx) => (
					<span key={idx}>{rating}</span>
				))}
			</div>
		)
	},
)

export default Rating
