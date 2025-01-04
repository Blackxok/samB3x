import { Heading, Tag } from '../../components'
import styles from './c-p-com.module.css'
import { CoursePageComponentProps } from './c-p-com.props'

const CoursePageComponent = ({
	firstCategory,
	page,
	products,
}: CoursePageComponentProps): JSX.Element => {
	console.log(page.title)

	return (
		<div className={styles.wrapper}>
			{/* TITLE */}
			<div className={styles.title}>
				<Heading tag='h1'>{page.title}</Heading>
				<div>Sort...</div>
			</div>

			{/* PRODUCTS */}
			<div>PRODUCTS</div>

			{/* VACATIONS */}
			<div className={styles.hhTitle}>
				<Heading tag='h2'>Vacations - {page.category}</Heading>
				<Tag color='re' size='m'>
					hh.uz
				</Tag>
			</div>

			{/* HHDATA */}
			<div>HHDATA</div>
		</div>
	)
}

export default CoursePageComponent
