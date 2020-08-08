const students = [
    {id: 21, name: "Tamim"},
    {id: 31, name: "Shakib"},
    {id: 41, name: "Mushfiq"},
    {id: 51, name: "Mashrafee"}
];
const res = students.map( (x) => x.name );
console.log(res);

// const studentName = [];
// for(let i = 0; i < students.length; i++){
//     const nameArray = students[i].name;
//     // console.log(nameArray);
//     studentName.push(nameArray);
    
// }
// console.log(studentName);

const specStudentAll = students.filter( (x) => x.id > 30);
console.log(specStudentAll);

const targetedStudent = students.find( (x) => x.id == 51);
console.log(targetedStudent);