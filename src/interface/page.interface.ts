export enum PageCategory {
	Courses,
	Books,
}

export interface HhData {
	count: number
	juniorSalary: number
	middleSalary: number
	seniorSalary: number
}

export interface AdvantageData {
	title: string
	description: string
	id: string
}

export interface PageModel {
	_id: string
	title: string
	alias: string
	tags: string[]
	description: string
	hh: HhData
	advantages: AdvantageData[]
}
