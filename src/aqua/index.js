import express, { Router } from 'express'
import morgan from 'morgan'

const BASE_URL = Object.freeze('/aqua')

const app = express()

// Plugins
app.use(morgan('dev'))

// Namespaced routes (e.g. /aqua/dist/...)
const routes = Router()
routes.get('/', (req, res) => { res.send('Hello world!') })
routes.use('/components', express.static('./components'))
routes.use('/dist', express.static('./dist'))
app.use(BASE_URL, routes)

app.listen(process.env.PORT, process.env.HOST, () => {
	console.info('Listening on port:', process.env.PORT)
})
