import express, { Request, Response } from 'express'
import data from '../db.json'

const router = express.Router()

router.get('/', (req: Request, res: Response) => {
	res.status(200).json(data) //Nega return yoq???
})

export default router
