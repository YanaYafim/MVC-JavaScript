// Zadanie 3
const { getStudentFullName, getStudentId } = require('../webfoto/student').default

// Zadanie 4

const http = require('http'),
      PORT = 3000,
      FULLNAME = getStudentFullName(),
      STUDENT_ID = getStudentId()

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'})
});

server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
    console.log(`My name is ${FULLNAME}. Mystudent ID is ${STUDENT_ID}`)
});

server.requestListener()

// Zadanie 5
const htmlContent = `
<!DOCTYPE html>
<html>
<head>
    <title>About student</title>
</head>
<body>
    <p>My name is ${FULLNAME}. My student ID is ${STUDENT_ID}</p>
</body>
</html>
`;

res.end(htmlContent)

server.listen(PORT, () => {
console.log(`Server is running on ${PORT}`)
});