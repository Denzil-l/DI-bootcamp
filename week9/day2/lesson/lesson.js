// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("result1");
//     }, 1000);
// });

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("result2");
//     }, 2000);
// });

// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("result3");
//     }, 3000);
// });

// Promise.all([promise1, promise2, promise3])
// .then((results) => {
//   console.log(results);
// }).catch((error) => {
//   console.log(error);
// });
// // result2

// Promise.allSettled([promise1, promise2, promise3])
// .then((results) => {
//   console.log(results);
//   // results.map(r => {
//   //   console.log(`{ status: ${r.status}, value: ${r.value}, reason: ${r.reason} }`);
//   // })
// })
// //  [
// //   { status: 'fulfilled', value: 'result1' },
// //   { status: 'rejected', reason: 'result2' },
// //   { status: 'fulfilled', value: 'result3' }
// // ]


// Promise.race([promise1, promise2, promise3])
// .then((results) => {
//   console.log(results);
// })
// .catch((error) => {
//   console.log(error);
// });
// //result1

const func = (x) => new Promise((resolve, reject) =>{
  setTimeout(()=>{
      typeof(x) == 'string' ? resolve(x.toUpperCase()) : reject(x)
  },5000)
})
func('text')
.then(result => {
  console.log(result.repeat(2))
})
.catch(error => console.log(error))
.finally(console.log('congratulation'))