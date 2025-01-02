interface Review {
	_id: string
	name: string
	title: string
	description: string
	rating: number
	productId: string
}

interface Characteristic {
	name: string
	value: string
}

interface ProductModel {
	alias: string
	title: string
	_id: string
	productId: string
	category: string
	price: number
	credit: number
	images: string
	oldPrice: number
	description: string
	advantages: string
	disadvantages: string
	tags: string[]
	characteristics: Characteristic[]
	initialRating: number
	reviews: Review[]
	reviewCount: number
}
