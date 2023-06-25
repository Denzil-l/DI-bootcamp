// const table = document.getElementById('sampleTable')
// const insertRow = () =>{
//     let amountOfrows = table.getElementsByTagName('tr').length
//     table.innerHTML += `<tr><td>Row${amountOfrows+1} cell1</td><td>Row${amountOfrows+1} cell2</td></tr>`
// }
// const btn = document.getElementById('jsstyle')
// const div = document.querySelector('div')
// function func(e){
//     div.style.padding = '30px'
//     div.style.border = '5px solid black'
//     console.log('Div function')    

// }
// div.addEventListener('click', func)
// btn.addEventListener('click', (e)=>{
//     btn.style.color = 'red'
//     console.log('Button function')    
//     e.stopPropagation()
// })

// btn.addEventListener('mouseover', (e)=>{
//     btn.style.border = '2px dotted blue'
//     console.log('Button function')    
//     e.stopPropagation()

// })
// btn.addEventListener('mouseout', ()=>{
//     btn.style.border = '2px dotted black'
//     console.log('Button function')    

// })

// const form = document.forms[0]
// console.log(`First Name: ${form.elements[0].value} Last Name: ${form.lname.value}`)

const select = document.getElementById('select1')
console.log(select.options[1].value)
const newOption = document.createElement('option')
newOption.value = 'Primary School'
newOption.textContent = 'School'
select.insertBefore(newOption,select.options[0])
const newOption1 = document.createElement('option')
newOption1.value = 'work1'
newOption1.textContent = 'Worker'
select.options.shift
select.innerHTML += '<option value="Work">Work</option>'
// select.options[3].selected = true
select.selectedIndex = 3
const button = document.createElement('button')
button.value = 'Show'
button.textContent = 'Show'
button.addEventListener('click', ()=>{
    alert(select.value)
})
document.body.appendChild(button)