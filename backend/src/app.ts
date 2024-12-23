import { config } from 'dotenv'
import express, { Application, Request, Response } from 'express'
import data from './db.json'

config()

const app: Application = express()

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
	res.status(200).json(data)
})

const PORT = process.env.PORT || 4100

function appStart() {
	try {
		app.listen(PORT, () => console.log(`listening on port- ${PORT}`))
	} catch (err) {
		console.log(err)
	}
}
appStart()
