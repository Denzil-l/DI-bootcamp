// //Exercise 1

// let numbers = [123, 8409, 100053, 333333333, 7]

// for (let i = 0; i < numbers.length; i++) {
//     if(numbers[i] % 3 == 0){
//         console.log(true)
//     }else{
//         console.log(false)
//     }
    
// }

// // Exercise 2


// let guestList = {
//     randy: "Germany",
//     karla: "France",
//     wendy: "Japan",
//     norman: "England",
//     sam: "Argentina"
//   }
// response = prompt('Please enter your name')
// if (response in guestList){
//     console.log(`Hello ${response}, you are from ${guestList.response}`)
// }else{
//     console.log("Hi! I'm a guest.")
// }

// Exercise 3

let age = [20,5,12,43,98,55];
let sum = 0
let highest = 0
for (let i = 0; i < age.length; i++) {
    sum=+ age[i]
    if(highest < age[i]){
        highest = age[i]
    }
}
console.log(sum)
console.log(highest)

