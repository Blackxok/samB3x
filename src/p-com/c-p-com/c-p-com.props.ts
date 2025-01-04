import { PageCategory, PageModel } from '@/src/interface/page.interface'


export interface CoursePageComponentProps {
	firstCategory: PageCategory;
	page: PageModel;
	products: ProductModel[];
}