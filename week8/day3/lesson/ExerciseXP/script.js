// //Exercise 1
// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// colors.forEach((element,index) => {
//     console.log(`${index}# choice is ${element}.`)
// });
// console.log(colors.includes('Violet') ? 'Yeah' : 'No...')

// //Exercise 2

// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// const ordinal = ["th","st","nd","rd"];
// colors.forEach((e,i) => {
//     i < 3 ? console.log(`${i+1}${ordinal[i+1]} choice is ${e}`) :console.log(`${i+1}${ordinal[0]} choice is ${e}`)
// });

// //Exercise 3

//1 It will be one big combine array
//[ 'bread', 'carrot', 'potato', 'chicken', 'apple', 'orange' ]
//2 It will be ['U','S','A']
//Bonus It will be ['undifined','undifined'] because [,,] != [',,']


// //Exercise 4
// const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
//              { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
//              { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
//              { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
//              { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
//              { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
//              { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];
// const welcomeStudents = users.map(e => `Hello ${e.firstName}`)
// console.log(welcomeStudents)
// const FullStackResidents = users.filter(e => e.role === 'Full Stack Resident')
// console.log(FullStackResidents)
// console.log(FullStackResidents.map(e => e.lastName))


// //Exercise 6
// const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away']
// console.log(epic.reduce((acc,val)=> acc + ' ' + val))

// //Exercise 7

// const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
//                {name: "Liam", course: "Computer Science", isPassed: false}, 
//                {name: "Jenner", course: "Information Technology", isPassed: true}, 
//                {name: "Marco", course: "Robotics", isPassed: true}, 
//                {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
//                {name: "Jamie", course: "Big Data", isPassed: false}];


// (students.filter(e => e.isPassed)).forEach(element => {
//     console.log(`Good job ${element.name}, you passed the course in ${element.course}`)
// });