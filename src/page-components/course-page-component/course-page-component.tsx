import { SortEnum } from '@/src/components/sort/sort.props'
import { useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Advantages, Heading, HhData, Product, Sort, Tag, Text } from '../../components'
import styles from './course-page-component.module.css'
import { CoursePageComponentProps } from './course-page-component.props'
import { sortReducer } from './sort.reducer'

const CoursePageComponent = ({ page, products }: CoursePageComponentProps): JSX.Element => {
	const [state, dispatch] = useReducer(sortReducer, { sort: SortEnum.Rating, products: products })

	const setSort = (sort: SortEnum) => {
		dispatch({ type: sort })
	}
	return (
		<div className={styles.wrapper}>
			{/* TITLE */}
			<div className={styles.title}>
				<Heading tag='h1'>{page.title}</Heading>
				<Sort sort={state.sort} setSort={setSort} />
			</div>

			{/* PRODUCTS */}
			{state.products && state.products.map(e => <Product key={uuidv4()} product={e} />)}

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
					<Tag color='primary' key={uuidv4()}>
						{t}
					</Tag>
				))}
		</div>
	)
}

export default CoursePageComponent
