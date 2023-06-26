// //Exercise 1
// const button = document.getElementById('clear')
// const div = document.querySelector('div')
// setTimeout(()=>{
//     alert('Hello World')
//     div.innerHTML += '<p>Hello World</p>'
// },2000)
// const timer = setInterval(()=>{
//     div.innerHTML += '<p>Hello World</p>'

// },2000)

// button.addEventListener('click', ()=>{
//     clearInterval(timer)
// })

//Exercise 2
const animate = document.getElementById('animate')
let left = 0
function myMove(){
    let timer = setInterval(()=>{
        left++
        animate.style.left = `${left}px`
        if(left == 350){
            left = 0
            clearInterval(timer)
        }
    },1)
}
