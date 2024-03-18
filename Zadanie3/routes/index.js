const renderPage = (res, fileName) => {
	res.sendFile('${__dirname}/../views/${fileName}.html')
}
  

const handleHome = (req, res) => {
	renderPage(res, 'home')
}
  

const handleStudent = (req, res) => {
	renderPage(res, 'student')
}
  
const handleFormSubmission = (req, res) => {
	res.redirect('/student')
}
  
module.exports = {
	handleHome,
	handleStudent,
	handleFormSubmission
}