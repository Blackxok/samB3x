export interface SortProps extends React.HTMLProps<HTMLDivElement> {
	sort: SortEnum
	setSort: (sort: SortEnum) => void
}

export enum SortEnum {
	Rating,
	Price,
}
