import express, { Request, Response } from 'express'
import data from '../db.json'
const router = express.Router()

router.post('/product-find', (req: Request, res: Response) => {
	try {
		const { category } = req.body
		const response = data.product.filter(c => c._id == category)
		res.status(200).json(response)
	} catch (error) {
		const result = error as Error
		res.status(400).json({ message: result.message })
	}
})

export default router
