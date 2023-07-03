// //Exercise 1

// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 3000, 'foo');
// });

// Promise.all([promise1,promise2,promise3])
// .then(values => {
//     console.log(values); // [3, 42, 'foo']
//   })
// .catch(error => console.log(error))

// // So here we have 3 variable. promise1 is a Promise which already resolved with value(3), promise2 is not a Promise, but Promise.all() handle the situation when some elements is not a promise and authomativaly make them like a resolved promise with the value which they were. In this time 42 = Promise.resolved(42) for Promise.all(). And finally promise3 return resolved Peomise with the value 'foo' after 3000ms. As a result all 3 promises is resolved and .then works, if one of them returned regect, it would be .catch()


//Exercise 2
//[2,4,6]