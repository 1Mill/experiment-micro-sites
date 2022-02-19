import express, { Router } from 'express'
import morgan from 'morgan'

const BASE_URL = Object.freeze('/aqua')

const app = express()

// Plugins
app.use(morgan('dev'))

// Namespaced routes (e.g. /aqua/...)
const routes = Router()
routes.use('/', express.static('public'))
app.use(BASE_URL, routes)

app.listen(process.env.PORT, process.env.HOST, () => {
	console.info('Listening on port:', process.env.PORT)
})
