import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import express from 'express'
import { errorHandler } from './middlewares/errorHandler'
import router from './routes/routes'

// .env faylini yuklash
dotenv.config()

// Express ilovasini yaratish
const app = express()

// Middleware-lar
app.use(bodyParser.json()) //
app.use('/api', router)
// Xatolikni qayta ishlash middleware
app.use(errorHandler)

const PORT = process.env.PORT || 4100
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
})
