import cn from 'classnames'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import Button from '../button/button'
import Input from '../input/input'
import styles from './search.module.css'
import { SearchProps } from './search.props'

const Search = ({ className, ...props }: SearchProps): JSX.Element => {
	const [search, setSearch] = useState('')
	const router = useRouter()

	const searchHandler = () => {
		if (!search.length) return
		router.push({ pathname: '/search', query: { q: search } })
	}

	return (
		<div className={cn(className, styles.search)} {...props}>
			<Input
				placeholder='Search...'
				className={styles.input}
				value={search}
				onChange={e => setSearch(e.target.value)}
			/>
			<Button appearance='primary' className={styles.button} onClick={searchHandler}>
				<FaSearch />
			</Button>
		</div>
	)
}

export default Search
