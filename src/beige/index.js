import express, { Router } from 'express'
import morgan from 'morgan'

const BASE_URL = Object.freeze('/beige')

const app = express()

// Plugins
app.use(morgan('dev'))

// Namespaced routes (e.g. /aqua/dist/...)
const routes = Router()
routes.get('/', (req, res) => { res.send('<h1>Hello World from BEIGE endpoint</h1>') })
app.use(BASE_URL, routes)

app.listen(process.env.PORT, process.env.HOST, () => {
	console.info('Listening on port:', process.env.PORT)
})
