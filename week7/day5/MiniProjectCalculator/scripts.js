const result = document.getElementById('result')

const addSomething = (block) =>{
const symphol = document.querySelector(block).textContent
result.innerText+= symphol
}
const reset = () => {
    result.innerText = ''
}
const equal = () =>{
    try{
        result.innerText = eval(result.textContent)
    } catch(error){
        result.innerText = error
    }
}