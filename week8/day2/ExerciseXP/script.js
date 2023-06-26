//Exercise 1
//#1 a = 3. It is obviously because 'if' condition is true and it 
//#1.2 we will get erorr because we can change value of const 
//#2 it will show 0 because
//#2.1 first 0 after 5 because all functions has an access to gloval variable
//#2.2 we will get an error 
//#3.1 it shows 'hello' I guess it because window object is the global(first) object or something like this. 
//#4 it will show 'test', because let a inside function and outhise function are differenet variables   
//4.2 nothing change because they are still diffirent variables
//#5 ^^^ this ^^^ explains all...

// //Exercise 2

// const winBattle = () => true
// let experiencePoints = winBattle() ? 10 : 1
// console.log(experiencePoints)

// //Exercise 3
// const checkValue = (x) => typeof(x) === 'string' ? true : false
// console.log(checkValue(1))

// //Exercise 4
// const sum = (x,y) => x + y

// //Exercise 5



// function fun1(x){
//     console.log(`${x}000gr`)
// }
// const fun2 = function (x){
//     console.log(`${x}000gr`)
// }
// const fun3 = (x) => console.log(`${x}000gr`)
// fun1(1)
// fun2(2)
// fun3(3)

// //Sooo... Except syntaxis the difference between all of these not important in this example. In global meaning. fun1 can be declare in any part of code. before or after called this function, doesn't matter. fun2 and fun3 will get an erorr if the called before initialization. 


// //Exercise 6
// (function (childre,parents,location,job){
//     document.body.innerHTML = `You will be a ${childre} in ${parents}, and married to ${location} with ${job} kids.`

// })(1,2,'Mocsow','FullStack')

// //Exercise 7
// document.querySelector('button').addEventListener('click', ()=>{
//     if (document.querySelectorAll('input')[0].value != '' && document.querySelectorAll('input')[1].value != ''){
//         let div = document.createElement('div')
//         div.innerText = document.querySelectorAll('input')[0].value
//         let image = document.createElement('image')
//         image.innerHTML = `<img src="${document.querySelectorAll('input')[1].value}" alt="">`
        
//         document.querySelector('.nav').appendChild(div)
//         document.querySelector('.nav').appendChild(image)
//     }
// })

//Exercise 8
const makeJuice  = (size) =>{
    let ingredients = []
    const addIngredients  = (ing1,ing2,ing3) =>{
        ingredients.push(ing1)
        ingredients.push(ing2)
        ingredients.push(ing3)
        
    }
    const displayJuice = () =>{
        let str = `The client wants a ${size} juice, containing`
        for (let i = 0; i < ingredients.length; i++) {
            str+=` ${ingredients[i]},`
        }
        document.body.innerHTML = str
    }
    addIngredients('limon','vodka','beer')
    addIngredients('chockolate','white Russian','Absemnt')
    displayJuice()
}
makeJuice('small')