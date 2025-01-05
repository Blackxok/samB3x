import { Advantages, Heading, HhData, Tag, Text } from '../../components'
import styles from './course-page-component.module.css'
import { CoursePageComponentProps } from './course-page-component.props'

const CoursePageComponent = ({
	firstCategory,
	page,
	products,
}: CoursePageComponentProps): JSX.Element => {
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
				<Tag color='red' size='m'>
					hh.uz
				</Tag>
			</div>

			{/* HHDATA */}
			{page.hh && <HhData {...page.hh} />}

			{/* Advantages */}
			{page.advantages.length > 0 && (
				<>
					<Heading tag='h2'>Advantage</Heading>
					<Advantages advantages={page.advantages} />
				</>
			)}
			{/* {Description} */}
			<Text>{page.description}</Text>

			{/* Skills */}
			<Heading tag='h2'>Skills</Heading>
			{page.tags.length > 0 &&
				page.tags.map(t => (
					<Tag color='primary' key={t}>
						{t}
					</Tag>
				))}
		</div>
	)
}

export default CoursePageComponent
