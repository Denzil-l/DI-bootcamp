// //Exercise 1

// let x = Math.floor(Math.random() * 100)
// for (let i = 0; i < x; i++) {
//     if(i % 2 == 0){
//         console.log(i)
//     }
// }

// //Exercise 2
// function func(str){
//     let list = []
//     let str1 = []; str2 = []
//     for (let i = 0; i < str.length; i++) {
//         if(i % 2 == 0){
//             str1.push(str[i].toUpperCase())
//         }else{
//             str2.push(str[i].toUpperCase())
//         }
        
//     }
//     str1 = str1.join('')
//     str2 = str2.join('')
//     list[0] = str1
//     list[1] = str2
//     return(list)
// }

// console.log(func('asdasdasfdafaraefdsaf'))

// //Exercise 3

// function Palindrome(str){
//      str = str.toLowerCase().split('')
//     let check = true
//     for (let i = 0; i < str.length/2; i++) {
//         if(str[i] != str[str.length -1 - i]){
//             check = false
//         }
//     }
//     return check
// }
// console.log(Palindrome('aXXyXXa'))

// //Exercise 4
// function biggestNumberInArray(array){
//     let biggest
//     for (let i = 0; i < array.length; i++) {
//         if(isNaN(array[i]) == false){
//             biggest = array[i]
//             break
//         }
//     }

//     for (let i = 0; i < array.length; i++) {
//         if(isNaN(array[i]) == false && array[i] > biggest){
//             biggest = array[i]
//         }
        
//     }
//     return biggest
// }

// console.log(biggestNumberInArray(['a',null,undefined,1,2,3,4,3,2,1]))


//Exercise 6
// let divblock = document.createElement('div')
// let table = document.createElement('table')
const date = new Date(2012, 9, 1);
const daysOfWeek = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота"
  ];
const dayOfWeek = date.getDay();
const dayName = daysOfWeek[dayOfWeek];

console.log(dayName);
// table.innerHTML = `<table>
// <tr>
//     <td>MO</td>
//     <td>TU</td>
//     <td>WE</td>
//     <td>TH</td>
//     <td>FR</td>
//     <td>SA</td>
//     <td>SU</td>
// </tr> 
// <tr>
//     <td>MO</td>
//     <td>TU</td>
//     <td>WE</td>
//     <td>TH</td>
//     <td>FR</td>
//     <td>SA</td>
//     <td>SU</td>
// </tr> 
// <tr>
//     <td>MO</td>
//     <td>TU</td>
//     <td>WE</td>
//     <td>TH</td>
//     <td>FR</td>
//     <td>SA</td>
//     <td>SU</td>
// </tr> 
// <tr>
//     <td>MO</td>
//     <td>TU</td>
//     <td>WE</td>
//     <td>TH</td>
//     <td>FR</td>
//     <td>SA</td>
//     <td>SU</td>
// </tr> 
// <tr>
//     <td>MO</td>
//     <td>TU</td>
//     <td>WE</td>
//     <td>TH</td>
//     <td>FR</td>
//     <td>SA</td>
//     <td>SU</td>
// </tr> 
// <tr>
//     <td>MO</td>
//     <td>TU</td>
//     <td>WE</td>
//     <td>TH</td>
//     <td>FR</td>
//     <td>SA</td>
//     <td>SU</td>
// </tr> 
// </table>`
