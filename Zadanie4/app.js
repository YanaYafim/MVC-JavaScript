const express = require('express')
const app = express()
const PORT = 3000

app.use(express.urlencoded({ extended: true }))

const routes = require('./routes/index')

const server = app.listen(PORT, () => {
	console.log('Server is running on ${PORT}')
})

app.get('/', routes.handleHome)
app.get('/student', routes.handleStudent)
app.post('/student', routes.handleFormSubmission)

app.use((req, res, next) => {
	res.status(404).header('Content-Type', 'text/html').send('404 Not Found')
})