import express, { Request, Response } from 'express'
import data from '../db.json'
const router = express.Router()

router.post('/page-find', (req: Request, res: Response) => {
	try {
		const { firstCategory } = req.body
		const response = data.page[firstCategory].find
		res.status(200).json(response)
	} catch (error) {
		const result = error as Error
		res.status(400).json({ message: result.message })
	}
})
router.get('/page-find/:id', (req: Request, res: Response) => {
	try {
		const response = data.productPage.find(c => c._id === req.params.id)
		res.status(200).json(response)
	} catch (error) {
		const result = error as Error
		res.status(400).json({ message: result.message })
	}
})

export default router
