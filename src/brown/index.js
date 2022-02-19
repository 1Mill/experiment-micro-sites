import express, { Router } from 'express'
import morgan from 'morgan'
import { helloWorld } from './components/hello-world.js'

const BASE_URL = Object.freeze('/brown')

const app = express()

// Plugins
app.use(morgan('dev'))

// Namespaced routes (e.g. /aqua/dist/...)
const routes = Router()
routes.get('/', (req, res) => { res.send('<h1 style="border: 3px dashed brown;">Hello World from BROWN endpoint</h1>') })
routes.get('/hello-world', (req, res) => { res.send(helloWorld()) })
app.use(BASE_URL, routes)

app.listen(process.env.PORT, process.env.HOST, () => {
	console.info('Listening on port:', process.env.PORT)
})
