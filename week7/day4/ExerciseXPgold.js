// //Exercise 1
// function isBlank(str){
//   if(str.length == 0){
//     return true
//   }else{
//     return false
//   }
// }
// console.log(isBlank(''))
// console.log(isBlank('abc'))

// //Exercise 2
// function abbrevName(fullname){
//     fullname = fullname.split(' ')
//     fullname[1] = fullname[1][0] + '.'
//     fullname = fullname.join(' ')
//     return fullname
// }

// console.log(abbrevName('Denis Shukhat')
// )

// //Exercise 3
// function changeCase(str){
//     str = str.split('')
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] == str[i].toUpperCase()) {
//             str[i] = str[i].toLowerCase()
//         }else{
//             str[i] = str[i].toUpperCase()
//         }
       
//     }
//     str = str.join('')
//     return str
// }
// console.log(changeCase('My name is Denis Shukhat'))


// //Exercise 4

// function isOmnipresent(array){
//     let list = []
//     for (let i = 0; i < array.length; i++) {
//         for (let j = 0; j < array[i].length; j++) {
//             let check = true
//             for (let z = 0; z < array.length; z++) {
//                 if(array[z].indexOf(array[i][j]) == -1){
//                     check = false
//                 }
//             }
//             if(check && list.indexOf(array[i][j]) == -1){
//                 list.push(array[i][j])
//             }
            
//         }
        
//     }
//     return list
// }
// let response = isOmnipresent([[3, 4], [8, 3, 2,4], [3,4], [9, 3,4], [5, 3,4], [4, 3]])
// console.log(response)

//Exercise 5
const tds = document.querySelectorAll('td')
console.log(tds)

for (let i = 0; i < tds.length; i++) {
    let x = tds[i].textContent.split('')
    console.log(x)
    if((+x[0] + +x[2] == 6)||(x[0] == x[2])){
        tds[i].style.background = 'red'
    }
}
