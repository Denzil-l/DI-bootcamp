// document.querySelector('button').addEventListener('click', ()=>{
//     let x = +document.querySelector('input').value
//     x >= 2000 ? document.querySelector('input').value = 'You are in the 21st century' : document.querySelector('input').value = 'You live in the Middle Age'
// })

const calculator = (x,y,sign) =>{
    sign == '+'? console.log(x+y):
    sign == '-'? console.log(x-y):
    sign == '*'? console.log(x*y):
    console.log('Error')
}

// calculator(3,2,'-')
let add = (function () {
    let counter = 0;
    function calculus() {
        counter += 1; 
        return counter
    }
    return calculus
  })();
  
  console.log(add());
  console.log(add());
  console.log(add());

const g = n => n + 1;
const f = n => n * 2;

const h = x => f(g(x));

console.log(h(20)); //=> 42

let c = { greeting: 'Hey!' };
let d;

d = c;
c.greeting = 'Hello';
console.log(d.greeting);
console.log(c.greeting);
const person = {
    name: 'Lydia',
    age: 21,
  };
  const year = "2023";
  const month = "6";
  const day = "26";
  
  const formattedDate = `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  console.log(formattedDate); // "2023-06-26"