import { port } from './config/config'
import express from 'express'

const app = express()

app.listen(port, '0.0.0.0', () => {
	console.log(`listening at http://localhost:${port}`)
})