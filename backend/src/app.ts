import bodyParser from 'body-parser'
import { config } from 'dotenv'
import express, { Application, Request, Response } from 'express'
import router from './routes/routes'

// .env faylini yuklash
config()

// Express ilovasini yaratish
const app: Application = express()

// JSON ma'lumotlarini parslash uchun bodyParser ni ishlatish
app.use(bodyParser.json())

// "/api" yo'lini router bilan bog'lash
app.use('/api', router)

// Asosiy yo'l uchun GET endpoint
app.get('/', (req: Request, res: Response) => {
	console.log("Root endpointga so'rov yuborildi")
	res.status(200).json({ message: 'API ishlayapti' })
})

// Server portini olish (agar .env faylda PORT bo'lsa, shuni ishlatadi, aks holda 4100 ishlatiladi)
const PORT = process.env.PORT || 4100

// Serverni ishga tushurish
app.listen(PORT, () => {
	console.log(`Server ${PORT} portida ishlamoqda`)
})
