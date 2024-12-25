import express, { Request, Response } from 'express'
import data from '../db.json'

const router = express.Router()

// POST /api/product-find
router.post('/product-find', (req: Request, res: Response) => {
  try {
    const { category } = req.body
    const response = data.product.filter(c => c.category === category)

    if (response.length === 0) {
      return res.status(404).json({ message: 'Product not found' })
    }

    return res.status(200).json(response)
  } catch (error) {
    const result = error as Error
    return res.status(400).json({ message: result.message })
  }
})

export default router
