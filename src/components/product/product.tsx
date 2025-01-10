import cn from 'classnames'
import { useState } from 'react'
import { FaImage } from 'react-icons/fa'
import { convertToUSD } from '../../helpers/helpers'
import Button from '../button/button'
import Card from '../card/card'
import Divider from '../divider/divider'
import Rating from '../rating/rating'
import ReivewForm from '../review-form/review-form'
import Review from '../review/review'
import Tag from '../tag/tag'
import styles from './product.module.css'
import { ProductProps } from './product.props'
import { v4 as uuidv4 } from 'uuid';


const Product = ({ product, className, ...props }: ProductProps): JSX.Element => {
	const [reviewOpen, setReviewOpen] = useState<boolean>(false)

	return (
		<div className={className} {...props}>
			<Card className={styles.product}>
				<div className={styles.logo}>
					<FaImage
						style={{ fontSize: '70px', cursor: 'pointer' }}
						title='This must come from the backend'
					/>
				</div>
				<div className={styles.title}>{product.title}</div>
				<div className={styles.price}>
					{convertToUSD(product.price)}
					{product.oldPrice && (
						<Tag color='green' className={styles.oldPrice}>
							{convertToUSD(product.price - product.oldPrice)}
						</Tag>
					)}
				</div>
				<div className={styles.credit}>
					{convertToUSD(product.credit)}/<span className={styles.month}>month</span>
				</div>
				<div className={styles.rating}>
					<Rating rating={product.initialRating} />
				</div>
				<div className={styles.tags}>
					{product.tags.length &&
						product.tags.map(t => (
							<Tag key={uuidv4()} className={styles.category} color={'primary'}>
								{t}
							</Tag>
						))}
				</div>
				<div className={styles.priceTitle}>Price</div>
				<div className={styles.creditTitle}>Credit</div>
				<div className={styles.rateTitle}>{product.reviewCount} reviews</div>

				<Divider className={styles.hr} />

				<div className={styles.description}>{product.description}</div>

				<div className={styles.features}>
					{product.characteristics.length &&
						product.characteristics.map(ch => (
							<div className={styles.characteristic} key={uuidv4()}>
								<span className={styles.characteristicName}>{ch.name}</span>
								<span className={styles.characteristicDots}></span>
								<span className={styles.characteristicValue}>{ch.value}</span>
							</div>
						))}
				</div>

				<div className={styles.advBlock}>
					{product.advantages && (
						<div className={styles.advantages}>
							<div className={styles.advantageTitle}>Advantages</div>
							<div>{product.advantages}</div>
						</div>
					)}
					{product.disadvantages && (
						<div className={styles.disadvantages}>
							<div className={styles.disadvantageTitle}>Disadvantages</div>
							<div>{product.disadvantages}</div>
						</div>
					)}
				</div>

				<Divider className={styles.hr2} />

				<div className={styles.actions}>
					<Button appearance='primary'>More Details</Button>
					<Button
						appearance='ghost'
						arrow={reviewOpen ? 'down' : 'right'}
						className={styles.reviewBtn}
						onClick={() => setReviewOpen(prev => !prev)}
					>
						Review
					</Button>
				</div>
			</Card>
			<Card
				color='white'
				className={cn(styles.review, {
					[styles.opened]: reviewOpen,
					[styles.closed]: !reviewOpen,
				})}
			>
				{product.reviews.map(r => (
					<div key={uuidv4()}>
						<Review review={r} />
						<Divider />
					</div>
				))}
				<ReivewForm productid={product._id} />
			</Card>
		</div>
	)
}

export default Product
