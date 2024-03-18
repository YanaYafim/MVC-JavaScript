const express = require('express')
const app = express()
const PORT = 3000


app.use(express.static('views'))


const server = app.listen(PORT, () => {
	console.log('Server is running on ${PORT}')
})


const renderPage = (res, fileName) => {
	res.sendFile('Zadanie12/views/home.html')
}


app.get('/', (req, res) => {
	renderPage(res, 'home')
})

app.get('/student', (req, res) => {
	renderPage(res, 'student')
})