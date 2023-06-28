const colors = [
    "#000000", "#FFFFFF", "#FF0000", "#00FF00", "#0000FF", "#FFFF00",
    "#FF00FF", "#00FFFF", "#FFA500", "#800080", "#008000", "#000080",
    "#800000", "#008080", "#FFC0CB", "#FFFFE0", "#00FA9A", "#FFD700",
    "#FF1493", "#FF00FF", "#FF4500"
  ];
//Defined a list of colors
const aside = document.querySelector('.aside__grid')
let Grid = document.querySelector('.Grid')
// Get Aside and Grid blocks
colors.forEach(element => {
    let color = document.createElement('div')
    color.classList = 'aside__item'
    color.style.background = element
    aside.appendChild(color)
});
//Created color's grid
for (let i = 0; i < 60*50; i++) {
    let item = document.createElement('div')
    item.classList = 'Grid__item'
    Grid.appendChild(item)
}
//Created drawing Grid


Grid = document.querySelectorAll('.Grid__item')
// Reassign Grid variable and put there an array with each cell
const buttonColors = document.querySelectorAll('.aside__item')
// Created an array with each color-button
let currentColor ='black'
//Created a variable which contain current color
buttonColors.forEach((element, index) => {
    element.addEventListener('click', ()=>{
        currentColor = colors[index]
    })
});
//Created an event for each color-button. Whe the even execute, current color change for new color
Grid.forEach(element => {
    element.addEventListener('mouseover', (e)=>{
        if (e.buttons === 1) {
            element.style.background = currentColor

        }

    })
});
//Created an event for each cell in Grid space. Event execute when mouseover a cell and left button in mouse is clicked. IT change background of this cell

const Clear = document.querySelector('.aside__button')
Clear.addEventListener('click',()=>{
    Grid.forEach(element => {
        element.style.background = 'transparent'
    });
})

//Created clear Event