import { config } from 'dotenv'
import express, { Application } from 'express'
import { errorHandler } from './middlewares/errorHandler'
import pageRoutes from './routes/pageRoutes'
import productRoutes from './routes/productRoutes'

config()
const app: Application = express()
app.use(express.json())
app.use(errorHandler)
//routes
app.use('/api', pageRoutes)
app.use('/api', productRoutes)

const PORT = process.env.PORT || 4100
app.listen(PORT, () => {
	console.log(`Server listening on port - ${PORT}`)
})
