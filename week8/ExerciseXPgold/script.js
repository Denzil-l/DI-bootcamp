
//Exercise 1
// const select = document.getElementById('genres')
// // select.innerHTML += '<option value="classic">Classic</option>'
// // Or I can do it the usual way
// let newOption = document.createElement('option')
// newOption.textContent = 'Classic'
// newOption.value = 'classic'
// select.appendChild(newOption)
// select.value = 'classic'
// //Exercise 2
// const form = document.forms[0]
// const select = document.getElementById('colorSelect')
// const button = document.querySelector('input')
// const removecolor = (e) =>{
//     select.remove(select.selectedIndex)
// }
// button.addEventListener('click', removecolor)
//Exercise 3
let shoppingList=[]
const root = document.getElementById('root')
root.innerHTML = `<form>
<input type="text" id="text">
<button type="button" id="additem">Add item</button>
<button type="button" id="clear">Clear All</button>
</form>
<ul></ul>
`;

let button1 = document.getElementById('additem').addEventListener('click', (e)=>{
 let item = document.getElementById('text').value
 shoppingList.push(item)
 document.querySelector('ul').innerHTML+= `<li>${item}</li>`
})
let button2 = document.getElementById('clear').addEventListener('click', (e)=>{
    shoppingList = []
    document.querySelector('ul').innerHTML= ``
})