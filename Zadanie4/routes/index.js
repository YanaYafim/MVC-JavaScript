const fs = require('fs')

const renderPage = (res, fileName, data) => {
	res.render(fileName, data)
}

const handleHome = (req, res) => {
	renderPage(res, 'home')
}

const handleStudent = (req, res) => {
	const { code, name, lastname, gender, age, studyField } = req.body

	fs.writeFile('${code}.txt, Numer albumu: ${code}\nImię: ${name}\nNazwisko: ${lastname}\nPłeć: ${gender}\nWiek: ${age}\nKierunek: ${studyField}', (err) => {
		if (err) throw err
		console.log('Dane zapisano do pliku.')
	})

	const data = { code, name, lastname, gender, age, studyField }
	renderPage(res, 'student', data)
}

module.exports = {
	handleHome,
	handleStudent
}