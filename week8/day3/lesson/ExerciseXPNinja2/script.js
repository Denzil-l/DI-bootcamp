// //Exercise 1

// const menu = [
//     {
//       type : "starter",
//       name : "Houmous with Pita"
//     },
//     {
//       type : "starter",
//       name : "Vegetable Soup with Houmous peas"
//     },
//     {
//       type : "dessert",
//       name : "Chocolate Cake"
//     }
//   ]

//   console.log(menu.some(e => e.type == 'dessert'))
//   console.log(menu.every(e => e.type == 'starter'))
// menu.some(e => e.type == 'main course') ? null : menu.push({
//     type : "main course",
//     name : "Pizza"
//   })
// console.log(menu)

// const vegetarian = ["vegetable", "houmous", "eggs", "vanilla", "potatoes" ]
// menu.forEach(element => {
//     element.vegetarian = vegetarian.some(e => element.name.toLowerCase().includes(e))
// });
// console.log(menu)

// //Exercise 2

// const string_chop = (str, num) => {
//   const regex = new RegExp(`.{1,${num}}`, 'g');
//   return str.match(regex) || [];
// }

// console.log(string_chop('xxxxxxxxdasdasxxx',4))


// //Exercise 3
// const search_word = (str,word) => {
//     let i = 0
//     while(str.includes(word)){
//         str = str.replace(word,'')
//         i++
//     }
//     return(i)
// }

// console.log(search_word('The fox foxfox quick brown fox', 'fox')); 
// "'fox' was found 1 times." 


//Exercise 4

const reverseArray = (array) => array.reverse()
console.log(reverseArray([1,2,3,4,5,[1,2,3,4,5]]))


