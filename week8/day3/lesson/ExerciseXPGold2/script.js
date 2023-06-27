//Exercise 1

const sum = (arr) =>console.log(arr.reduce((acc,val) => acc + val))

sum([1,2,3,4,5])

//Exercise 2

const removeDuplicate = (arr) => [...new Set(arr)]
console.log(removeDuplicate([1,2,2,2,3,3,1,1,1,2,3,4,5,5]))

//Exercise 3

const remover = (arr) => arr.filter(e => {
    if(e != null && e != 0 && e != false && e != undefined && e != NaN){
        return e
    } })
console.log(remover([NaN, 0, 15, false, -22, '',undefined, 47, null]))

const remover2 = (arr) => arr.filter(e => Boolean(e));
console.log(remover2([NaN, 0, 15, false, -22, '', undefined, 47, null]));


//Exercise 4
const repeater = (str,times) => str.repeat(times)
console.log(repeater('2x',13))

//Exercise 5

const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';
console.log(startLine);
console.log(turtle);
console.log(rabbit);

turtle = turtle.trim().padEnd(9, '=')
console.log(turtle)