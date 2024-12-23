import cn from 'classnames'
import { useEffect, useState } from 'react'
import style from './rating.module.css'
import { RatingProps } from './rating.props'
import StarIcon from './star.svg'
export default function Rating({
	rating,
	isEditable = false,
	setRating,
	...props
}: RatingProps): JSX.Element {
	const [ratingarr, setRatingarr] = useState<JSX.Element[]>(new Array(5).fill(<></>))

	useEffect(() => {
		renderRating(rating)
	}, [rating])

	const renderRating = (currentRating: number) => {
		const updateArray = ratingarr.map((r: JSX.Element, idx: number) => (
			<span
				className={cn(style.star, {
					[style.filled]: idx < currentRating,
					[style.editable]: isEditable,
				})}
				onMouseEnter={() => changeRatingDisplay(idx + 1)}
				onMouseLeave={() => changeRatingDisplay(rating)}
				onClick={() => clickRatingHandler(idx + 1)}
			>
				<StarIcon />
			</span>
		))

		setRatingarr(updateArray)
	}

	const changeRatingDisplay = (currentRatingIndex: number) => {
		if (!isEditable) {
			return
		}
		renderRating(currentRatingIndex)
	}
	const clickRatingHandler = (currentRatingIndex: number) => {
		if (!isEditable || !setRating) {
			return
		}
		setRating?.(currentRatingIndex)
	}

	return (
		<div className={style.rating} {...props}>
			{ratingarr.map((star, idx) => (
				<span key={idx}>{star}</span>
			))}
		</div>
	)
}
