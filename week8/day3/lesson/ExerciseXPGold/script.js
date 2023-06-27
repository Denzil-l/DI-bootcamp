//Exercise 1
// if it has a vatiable which get a result, it will be [2,4,6], but now it doesn' save somewhere    

//Exercise 2
//[1,2,0,1,2,3]


//Exercise 3
//[2,4,8,10,16,18]
// i is index of element

//Exercise 4
const array = [[1],[2],[3],[[[4]]],[[[5]]]];
console.log(array.flat().map(e => Array.isArray(e) ? e.flat(): e))

const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]]
console.log(greeting.map(e => e.join(' ')))
console.log(greeting.map(e => e.join(' ')).join(' '))
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]]
console.log(trapped.flat(Infinity))