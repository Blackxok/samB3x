import express from 'express'
import pageRoutes from './pageRoutes'
import productRoutes from './productRoutes'

const router = express.Router()

router.use('/', pageRoutes)
router.use('/', productRoutes)

export default router
