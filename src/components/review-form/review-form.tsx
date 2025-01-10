import cn from 'classnames'
import { Controller, useForm } from 'react-hook-form'
import { Button, TextArea } from '..'
import Input from '../input/input'
import Rating from '../rating/rating'
import { IReviewForm } from './review-form.interface'
import styles from './review-form.module.css'
import { ReviewFormProps } from './review-form.props'

const ReivewForm = ({ productid, className, ...props }: ReviewFormProps): JSX.Element => {
	const { register, handleSubmit, control } = useForm<IReviewForm>()

	const onSubmit = (data: IReviewForm) => {
		console.log(data.rating)
	}
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className={cn(styles.reviewForm, className)} {...props}>
				<Input placeholder='Name' className={styles.name} {...register('name')} />
				<Input placeholder='Title' className={styles.title} {...register('title')} />
				<div className={styles.rating}>
					<span>Rating: </span>
					<Controller
						control={control}
						name={'rating'}
						render={({ field }) => (
							<Rating isEditabled rating={field.value} ref={field.ref} setRating={field.onChange} />
						)}
					/>
				</div>
				<TextArea
					placeholder='Description'
					className={styles.description}
					{...register('description')}
				/>
				<div className={styles.submit}>
					<Button appearance='primary'>Submit</Button>
					<span className={styles.info}>
						* Your review will be moderated and reviewed before being published.
					</span>
				</div>
			</div>
		</form>
	)
}

export default ReivewForm
