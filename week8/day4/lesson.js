// var employee = {    // Object we want to destructure
//     firstname: 'Jon',
//     lastname: 'Snow',
//     dateofbirth: '1990'
// };

// // Destructuring the object into variables without 
// // assigning default values 
// var { firstname, lastname, country } = employee;
// console.log("Without setting default values")
// console.log( firstname, lastname, country);

// // Destructuring the object into variables by 
// // assigning default values 
// var { firstname = 'default firstname', 
//       lastname = 'default lastname', 
//       country = 'default country' } = employee;
// console.log("\n After setting default values")
// console.log( firstname, lastname, country);


// let myObj = {
//     name : "John",
//     lastName : "Doe",
//     age : 25,
//     friends : ["Mark", "Lucie", "Ana"]
// }
// console.log(Object.keys(myObj).length)
// console.log(Object.values(myObj).length)
// let i = 0
// for (const [key,value] of Object.entries(myObj)) {
//     i++
//     console.log(`The ${i} key is : ${key} The ${i} value is : ${value}`)
// }

const student = {
    name: 'John Doe',
    age: 16,
    scores: {
        maths: 74,
        english: 63,
        science: 85
    }
};

// // Without Destructuring
// function displaySummary(student) {
//     console.log('Hello, ' + student.name);
//     console.log('Your Maths score is ' + (student.scores.maths || 0));
//     console.log('Your English score is ' + (student.scores.english || 0));
//     console.log('Your Science score is ' + (student.scores.science || 0));
// }

// With Destructuring
// function displaySummary({name, scores: { maths = 0, english = 0, science = 0, history = 0 }}) {
//     console.log('Hello, ' + name);
//     console.log('Your Maths score is ' + maths);
//     console.log('Your English score is ' + english);
//     console.log('Your Science score is ' + science);
//     console.log('Your Science score is ' + history);
// }

// displaySummary(student);

// class Rabbit {
//     constructor(type) {
//         this.type = type;
//     }
//     speak(line) {
//         console.log(`The ${this.type} rabbit says '${line}'`);
//     }
// }
// let killerRabbit = new Rabbit("killer");
// let blackRabbit = new Rabbit("black");

// killerRabbit.speak('xxxxxxxxxxxx')
// blackRabbit.speak('yyyyy')

// class Rectangle {
//     constructor(height, width) {
//       this.height = height;
//       this.width = width;
  
//     }
//     // Getter
//     get area() {
//       return this.height * this.width;
//     }
  
//     // Setter
//     set area(factor) {
//       this.width = this.height*factor
//     }
//   }
  
//   const square = new Rectangle(10, 10);
//   square.area = 10
//   console.log(square.area)

// let date = document.getElementById('datetime');
// date.addEventListener("change",function(event){
//     let date = new Date(event.target.value);
//     console.log(date);
//   }
// );

let now = new Date();
console.log(now);

let dateString = now.toString();
console.log('toString',dateString);

let day = now.getDay();
console.log('getDay',day);

let dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
let dayName = dayNames[day];
console.log('dayNames',dayName);

console.log('getMonth',now.getMonth() + 1)
//returns the month of the date from 0 to 11,
//with 0 being January and 11 being December.

console.log('getDate',now.getDate())
// gives us the number for the dat of the month.

console.log('getFullYear',now.getFullYear())
// returns the 4 digit version of the year.

console.log('getHours',now.getHours())
// gives us a number from 0 to 23,
//which corresponds to midnight and 11pm.

console.log('getMinutes',now.getMinutes())
// returns the minutes of the hour from 0 to 59.

console.log('getSeconds',now.getSeconds())
// returns the seconds of the minute from 0 to 59.

console.log('getMilliseconds',now.getMilliseconds())
// returns a number from 0 to 999.

console.log('getTime',now.getTime())
// gives us the number of milliseconds that have elapsed since Jan 1, 1970 midnight UTC.

let today = new Date();
let anotherDay = new Date(2021,1,19, 11, 55)
let diff = today - anotherDay;
console.log('diff',diff);
let days = diff / (1000 * 60 * 60 * 24);
console.log('days',days);
console.log(Math.floor(days));