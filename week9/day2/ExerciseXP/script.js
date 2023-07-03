// //EXercise 1

// const compareToTen = (num) =>{
//     return new Promise((resolve,reject) =>{
//         if(num <= 10){
//             resolve('Success')
//         }else{
//             reject('not success')
//         }
//     })
// }

// compareToTen(15)
// .then(result => console.log(result))
// .catch(error => console.log(error))

// compareToTen(8)
//   .then(result => console.log(result))
//   .catch(error => console.log(error))


// //Exercise 2

// const  p = new Promise((resolve, regect) => {
//     setTimeout(()=>{
//         resolve('success')
//     },4000)
// })
// p.then(result => console.log(result))


// //Exercise 3

// const p1 = Promise.resolve(3)
// const p2 = Promise.reject('Boo')

// p1.then(result => console.log(result))
// p2.catch(error => console.log(error))

//Exercise 4

//done