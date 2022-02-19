import express, { Router } from 'express'
import morgan from 'morgan'
import { helloWorld } from './components/helloWorld.js'

const BASE_URL = Object.freeze('/aqua')

const app = express()

// Plugins
app.use(morgan('dev'))

// Namespaced routes (e.g. /aqua/dist/...)
const routes = Router()
routes.get('/', (req, res) => { res.send('Hello world!') })
routes.get('/components/helloWorld', (req, res) => { res.send(helloWorld()) })
app.use(BASE_URL, routes)

app.listen(process.env.PORT, process.env.HOST, () => {
	console.info('Listening on port:', process.env.PORT)
})
