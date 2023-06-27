let array = [1,2,3,4,5]
let newArray = array.map(e => e*2)
console.log(newArray)

const numbers = [10,11,12,15,20];

numbers.forEach(element => {
    element % 2 == 0 ? console.log(element) : null
});

const words = ["wow","hey","bye"];

console.log(words.some( e => e[0] == 'h'))
console.log(words.every( e => e[0] == 'h'))
let party = [
    {
      desert: 'Chocolate Mousse',
      calories: 30,
    },
    {
      desert: 'Apple Pie',
      calories: 15,
    },
    {
      desert: 'Croissant',
      calories: 50,
    },
    {
      desert: 'Strawberry Icecream',
      calories: 5,
    },
  ]

 console.log(party.reduce((acc, val) => val.desert !== 'Apple Pie' ? acc + val.calories : acc, 0))
 let alphabets = ["A", ..."BCD", "E"];
 console.log(alphabets);