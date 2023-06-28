//Exercise 1
// I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)

// //Exercise 2

// function displayStudentInfo(objUser){
//     const {first : f, last : l} = objUser
//     console.log(`Your full name is ${f} ${l}`)
// }

// displayStudentInfo({first: 'Elie', last:'Schoppik'});


// //Exercise 3
// const users = { user1: 18273, user2: 92833, user3: 90315 }
// const newArr = Object.entries(users).map(e => [e[0],e[1]*2])
// console.log(newArr)

//Exercise 4
// object

//Exercise 5
// number 2

//Exercise 6
//1.
// console.log([2] === [2]) // false
// console.log({} === {}) // false
//Because array and object it's a link for data in memory. so here we have 2 arrays and objects and they seem the same but they have diffirent refer for different objects and arrays in the memory
//2.
//object 1,2,3.number = 4
//object 4 = 5
//Because of explanation above. As a result we have here just two object but one of them has many variables which contain the same link

class Animal{
    constructor(name,type,color){
        this.name = name
        this.color = color
        this.type = type 
    }

}

class Mamal extends Animal{
    constructor(name,type,color){
        super(name,type,color)
    }
    sound = (str) =>{
        return `${this.name} is ${this.type} and has ${this.color} color. It tell you ${str}`
    }
}

const farmerCow = new Mamal('X','cow','white')
console.log(farmerCow.sound('mooo'))