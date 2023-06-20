//Exercise 1

// const people = ["Greg", "Mary", "Devon", "James"];
// people.splice(people.indexOf('Greg'),1)
// for (let i = 0; i < people.length; i++) {
//     if(people[i] == 'James'){
//         people[i] = people[i].replace('James','Jones')
//     }
    
// }
// people.push('Denis')
// console.log(people.indexOf('Mary'))
// let newArray = people.slice(1,people.length-1)
// console.log(newArray)
// console.log(people.indexOf('Foo'))//It will return -1 because Foo doesn't exist in this array
// let last = people[people.length-1]
// console.log(last)

// for (let i = 0; i < people.length; i++) {
//     console.log(people[i])
    
    
// }
// for (let i = 0; i < people.length; i++) {
//     console.log(people[i])
//     if(people[i] == 'Devon'){
//         break
//     }
    
// }

// //Exercise 2

// const colors = ['red','blue','black','yellow','white']
// for (let i = 0; i < colors.length; i++) {
//     console.log(`My ${i+1} choice is ${colors[i]}`)
    
// }


// //Exercise 3

// do{
//     num = prompt('Please enter your number less than 10')
//     num = parseInt(num)
// }
// while(num < 10)

// //Exercise 4
// const building = {
//     numberOfFloors: 4,
//     numberOfAptByFloor: {
//         firstFloor: 3,
//         secondFloor: 4,
//         thirdFloor: 9,
//         fourthFloor: 2,
//     },
//     nameOfTenants: ["Sarah", "Dan", "David"],
//     numberOfRoomsAndRent:  {
//         sarah: [3, 990],
//         dan:  [4, 1000],
//         david: [1, 500],
//     },
// }
// console.log(building.numberOfFloors)
// console.log(building.numberOfAptByFloor.firstFloor)
// console.log(building.numberOfAptByFloor.thirdFloor)
// console.log(building.nameOfTenants[1])
// console.log(building.numberOfRoomsAndRent.dan[0])
// if(building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1] > building.numberOfRoomsAndRent.dan[1]){
//     building.numberOfRoomsAndRent.dan[1]+=200
//     console.log(building.numberOfRoomsAndRent.dan[1])
// }


// //Exercise 5
// let family ={
//     father: 'Alexander',
//     mother: 'Vicrotia',
//     sun: 'Denis',
//     dauther:'Veronika'

// }
// for (const person in family) {
//     console.log(person)
//     console.log(family[person])
// }

// //Exercise 6
// let str = ''
// const details = {
//     my: 'name',
//     is: 'Rudolf',
//     the: 'raindeer'
//   }
// for (const key in details) {
//     str += `${key} ${details[key]} `
// }
// console.log(str)

// //Exericse 7

// const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
// let str = ''
// for (let i = 0; i < names.length; i++) {
//     str += names[i][0]
    
// }
// console.log(str.split('').sort().join('')
// )