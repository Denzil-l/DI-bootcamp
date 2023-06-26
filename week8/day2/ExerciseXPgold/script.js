// //Exercise 1

// let landscape = () => {
//     let result = "";
  
//     let flat = (x) => {
//       for (let count = 0; count < x; count++) {
//         result = result + "_";
//       }
//     };
  
//     let mountain = (x) => {
//       result = result + "/";
//       for (let counter = 0; counter < x; counter++) {
//         result = result + "'";
//       }
//       result = result + "\\";
//     };
  
//     flat(4);
//     mountain(4);
//     flat(4);
  
//     return result;
//   };
   
//    landscape()

//    // SO. The result will ____/''''\____ it works step by step from top to bottom so it isn't difficult. First it add to result 4 times "_" than "/" 4 times "'" "\" and 4 times "_"

//    //Exercise 2
// const addTo = x => y => x + y;
// const addToTen = addTo(10);
// addToTen(3);
// // it will 13, because in addToTen we put something like a half of function or the final function x + y and the first variable x = 10 and then in addToTen(3) we call x + y and we already have the private x = 10 and y now = 3 


//Exercise 3
// const curriedSum = (a) => (b) => a + b
// curriedSum(30)(1)

// It will 31

// //Exercise 4
// const curriedSum = (a) => (b) => a + b
// const add5 = curriedSum(5)
// console.log(        add5(12))

// // 17

//Exercise 5
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10)

//16 but it was realy difficult