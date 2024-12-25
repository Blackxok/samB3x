import express, { Request, Response } from 'express'
import data from '../db.json'

const router = express.Router()

// GET http://localhost:4100/api/page-find
router.get('/page-find', (req: Request, res: Response) => {
	res.status(200).json(data.page)
})

// POST http://localhost:4100/api/page-find > body > "firstCategory": 1
router.post('/page-find', (req: Request, res: Response) => {
	const { firstCategory } = req.body

	if (!data.page[firstCategory]) {
		return res.status(404).json({ message: 'Kategoriya topilmadi' })
	}

	res.status(200).json(data.page[firstCategory])
})

// GET http://localhost:4100/api/page-find/reactjs_id
router.get('/page-find/:id', (req: Request, res: Response) => {
	try {
		const product = data.productPage.find(c => c._id === req.params.id)
		if (!product) {
			return res.status(404).json({ message: 'Product not found' })
		}
		res.status(200).json(product)
	} catch (error) {
		const result = error as Error
		res.status(400).json({ message: result.message })
	}
})

export default router
