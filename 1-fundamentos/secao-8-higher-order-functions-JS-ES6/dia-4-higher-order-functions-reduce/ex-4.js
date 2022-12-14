const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];


// const expected = [
//   { name: 'Pedro Henrique', average: 7.8 },
//   { name: 'Miguel', average: 9.2 },
//   { name: 'Maria Clara', average: 8.8 },
// ];

const studentAverage = (estudantes, notas) => estudantes
  .map((estudante, i) => ({
    name: estudante,
    average: notas[i].reduce((acc, curr) => acc += curr, 0) / notas[i].length
  }));


console.log(studentAverage(students, grades));