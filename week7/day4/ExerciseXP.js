// //Exercise 1

// const displayNumbersDivisible = (divisor) =>{
//     for (let i = 0; i < 501; i++) {
//         if(i%divisor == 0){
//             console.log(i)
//         }
//     }
// }
// displayNumbersDivisible(5)

//Exercise 2

// const stock = { 
//     "banana": 6, 
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry":1
// }  
// const prices = {    
//     "banana": 4, 
//     "apple": 2, 
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry":10
// } 
// const shoppingList = ['banana',
//     'apple',
//     'orange']
// function myBill(){
//     let totatlprice = 0
//     shoppingList.forEach(item =>{
//         if(stock[item] > 0){
//             totatlprice+=prices[item]
//             stock[item]-=1
//         }
//     })
//     return totatlprice
// }
// console.log(myBill())
// console.log(stock)

// //Exercise 3

// function changeEnough(itemPrice, amountOfChange){
//     let sum = 0
//     sum+= amountOfChange[0]*0.25
//     sum+= amountOfChange[1]*0.10
//     sum+= amountOfChange[2]*0.05
//     sum+= amountOfChange[3]*0.01
//     if(itemPrice <= sum){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(changeEnough(10,[10,30,10,10]))

// //Exercise 4
// const hotelCost = (response) => {
// return `${response * 140}$`
// }
// const planeRideCost = (response) =>{
     
   
//     switch (true) {
//         case response == 'London':
//             return'Price is 183$'
//             break;
//         case response == 'Paris':
//             return'Price is 220$'
//             break;

    
//         default:
//             return 'Price is 300$'

//             break;
//     }
// }
// const rentalCarCost = (response) =>{
     
 
//     if(response < 11){
//         response = `${response * 40}$`
//     }
//     else{
//         response = `${response * 40*0.95}$`
//     }
//     return response
// }

// const totalVacationCost = () =>{
//      let response1,response2,response3
//     do {
//         response1 = prompt('Please enter number of nights in the hotel')
//         response2 = prompt('Please enter your destination')
//         response3 = prompt('Please enter number of days for renting car')
//        } while ((isNaN(response1) || response1 == '') || (isNaN(response3) || response3 == '') || (!isNaN(+response2) || response2 == ''));
//        alert(`Yout car cost ${rentalCarCost(response3)}, the hotel cost: ${hotelCost(response1)}, the plane ticket cost: ${planeRideCost(response2)}`)

// }
// totalVacationCost()

// //Exercise 5

// const div = document.getElementsByTagName('div')
// console.log(div[0])
// const Pete = document.getElementsByTagName('li')
// for (let i = 0; i < Pete.length; i++) {
//     if(Pete[i].textContent == 'Pete'){
//         Pete[i].innerText = 'Richard'
//     }
    
// }
// const delteLi = document.getElementsByTagName('ul')
// delteLi[1].removeChild(delteLi[1].children[1])
// console.log(typeof(delteLi))
// for (let i = 0; i < delteLi.length; i++) {
//     delteLi[i].firstElementChild.innerText = 'Denis'   
// }
// for (let i = 0; i < delteLi.length; i++) {
//     delteLi[i].classList.add('student_list')
// }
// delteLi[0].classList.add('university', 'attendance')

// div[0].style.background = 'lightblue'
// div[0].style.padding = '100px'
// for (let i = 0; i < Pete.length; i++) {
//     if(Pete[i].textContent == 'Dan'){
//         Pete[i].style.display = 'none'
//     }
//     if(Pete[i].textContent == 'Richard'){
//         Pete[i].style.border = '1px solid black'
//     }
    
// }
// document.body.style.fontSize = '40px'

// //Exercise 6

// const div = document.querySelector('div')
// div.setAttribute('id','socialNetworkNavigation')
// newli = document.createElement('li')
// newli.innerHTML = '<a href="#">Logout</a>'
// const ul = document.querySelector('ul')
// ul.appendChild(newli)
// console.log(ul.firstElementChild.textContent)
// console.log(ul.lastElementChild.textContent)

//Exercise probably 7

const allBooks = [
    {
        title: 'xxx',
        author:'yyy',
        image: 'https://avatars.mds.yandex.net/i?id=d09d19224c896df74b406968dcf677af689b7a79-9103996-images-thumbs&n=13',
        alreadyRead : true
    },
    {
        title: 'aaa',
        author:'bbb',
        image: 'https://avatars.mds.yandex.net/i?id=d09d19224c896df74b406968dcf677af689b7a79-9103996-images-thumbs&n=13',
        alreadyRead : false
    },
]
let section = document.querySelector('section')
let div = document.createElement('div')
let ul = document.createElement('ul')
div.appendChild(ul)
section.appendChild(div)
for (let i = 0; i < allBooks.length; i++) {
    let li1 = document.createElement('li')
    let li2 = document.createElement('li')
    li1.innerText = `${allBooks[i].title} was written by ${allBooks[i].author}`
    li2.innerHTML = `<img src="${allBooks[i].image}" style="width: 100px;" alt="">`
    if(allBooks[i].alreadyRead == true){
        li1.style.color = 'red'
    }
    ul.appendChild(li1)
    ul.appendChild(li2)
}


