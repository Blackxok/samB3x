import { ProductModel } from '@/src/interfaces/product.interface'

export interface ProductProps extends React.HTMLProps<HTMLDivElement> {
	product: ProductModel
}
