const blocks = document.querySelectorAll('.block')
let container = document.querySelector('.container')
const play = document.querySelector('.play')
blocks.forEach(element => {
    element.addEventListener('click', ()=>{
        const clone = element.cloneNode(true);
        container.appendChild(clone)
    })
});

play.addEventListener('click', () => {
    console.log('x');
    const container = document.querySelector('.container');
    const finalLine = container.querySelectorAll('.block');
    let delay = 0; 
  
    for (let i = 0; i < finalLine.length; i++) {
      setTimeout(() => {
        finalLine[i].firstElementChild.play();
      }, delay);
      delay += 500; 
    }
  });
  