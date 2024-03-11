// Zadanie 1
const FULLNAME = 'Yana Yafimava',
      STUDENT_ID = 44102

console.log(`My name is ${FULLNAME}. Mystudent ID is ${STUDENT_ID}`)


// Zadanie 2
function getStudentFullName() {
    return FULLNAME;
}

function getStudentId() {
    return STUDENT_ID;
}


// Zadanie 3
module.exports = {
    getStudentFullName,
    getStudentId
};

//Zadanie 6
function getStudentFullNameNEW(id) {
    switch (id){
        case 0: return FULLNAME;
        case 1: return 'KacperNowak';
        case 2: return 'MajaKowalska';
        default: return 'Michal Wisniewski';
    }
}

function getStudentIdNEW(id) {
    switch (id){
        case 0: return STUDENT_ID;
        case 1: return 111222;
        case 2: return 222333;
        default: return 333444;
    }
}

const id = 0;
console.log(`My name is ${getStudentFullNameNEW(id)}. Mystudent ID is ${getStudentIdNEW(id)}`)
