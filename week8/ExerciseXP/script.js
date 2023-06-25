// //Exercise 1
// const article = document.querySelector('article')
// console.log(article.querySelector('h1').textContent)
// article.removeChild(article.querySelectorAll('p')[article.querySelectorAll('p').length - 1])
// article.querySelector('h2').addEventListener('click', ()=>{
//     article.querySelector('h2').style.background = 'red'
// })
// article.querySelector('h3').addEventListener('click', ()=>{
//     article.querySelector('h3').style.display = 'none'
// })
// const button = document.createElement('button')
// button.textContent = 'Click'
// button.addEventListener('click', ()=>{
//     let p = article.querySelectorAll('p')
   
//     p.forEach(element => {
//         element.style.fontWeight = 'bold'
//     });
// })
// document.body.appendChild(button)
// article.querySelector('h1').addEventListener('mouseover', ()=>{
//     article.querySelector('h1').style.fontSize = `${Math.floor(Math.random() * 100)}px`
// })
// let p = article.querySelectorAll('p')
//     p[1].addEventListener('mouseover', ()=>{
//         p[1].style.opacity = '0.0'
//         p[1].style.transition = '0.3s'
//     })
//     p[1].addEventListener('mouseout', ()=>{
//         p[1].style.opacity = '1.0'
//         p[1].style.transition = '0.3s'
//     })

// //Exercise 2

// const form = document.forms[0]
// console.log(form)
// let fname = document.getElementById('fname')
// let lname = document.getElementById('lname')
// let fname1 = form.fname
// let lname1 = form.lname
// console.log(fname,fname1,lname,lname1)
// form.addEventListener('submit', (e)=>{
//     e.preventDefault()
//     let usersAnswer = document.querySelector('.usersAnswer')
//     if(form.fname.value != ''){
//         const newLi = document.createElement('li')
//         newLi.textContent = form.fname.value
//         usersAnswer.appendChild(newLi)
//         console.log(form.fname.value)
//     }
//     if(form.lname.value != ''){
//         const newLi = document.createElement('li')
//         newLi.textContent = form.lname.value
//         usersAnswer.appendChild(newLi)
//         console.log(form.lname.value)
//     }
// })

// //Exercise 3
// let allBoldItems = []
// const getBoldItems = () =>{
//     let bolds = document.querySelectorAll('strong')
//     for (let i = 0; i < bolds.length; i++) {
//         allBoldItems.push(bolds[i])
        
//     }
// }
// const highlight = () =>{
//     for (let i = 0; i < allBoldItems.length; i++) {
//         allBoldItems[i].style.color = 'blue'
    
//     }
// }
// const returnItemsToDefault = () =>{
//     for (let i = 0; i < allBoldItems.length; i++) {
//         allBoldItems[i].style.color = 'black'
    
//     }
// }
// getBoldItems()
// const p = document.querySelector('p')
// p.addEventListener('mouseover', ()=>{
//     highlight()
// })
// p.addEventListener('mouseout', ()=>{
//     returnItemsToDefault()
// })

// //Exercise 4
// const form = document.forms[0]
// form.addEventListener('submit', (e)=>{
//     form.volume.value = (4/3) * Math.PI * +form.radius.value^3 
//     e.preventDefault()

// })
// //Exercise 5
// const block = document.querySelector('.block')
// let x = 50
// let y = 50

// block.addEventListener('click', ()=>{
//     block.style.background = 'black'
// })
// block.addEventListener('dblclick', ()=>{
//     block.style.background = 'white'
// })
// block.addEventListener('mouseover', ()=>{
//     x +=10
//     y +=10
//     block.style.top = `${x}%`
//     block.style.left = `${y}%`
// })
// block.addEventListener('mouseout', ()=>{
//     x = 50
//     y = 50
//     block.style.top = `${x}%`
//     block.style.left = `${y}%`
// })