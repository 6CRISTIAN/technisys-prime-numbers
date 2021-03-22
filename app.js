const { config } = require('./config/config')
const { primeNumberRouter } = require('./routes/prime-number.routes')
const express = require('express')
const app = express()

app.use(express.json())
app.use('/api/v1/prime-number', primeNumberRouter);

app.listen(config.port, '0.0.0.0', () => {
	console.log(`listening at http://localhost:${config.port}`)
})