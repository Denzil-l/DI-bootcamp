// Exercise 1

const data = [
    {
      name: 'Butters',
      age: 3,
      type: 'dog'
    },
     {
      name: 'Cuty',
      age: 5,
      type: 'rabbit'
    },
    {
      name: 'Lizzy',
      age: 6,
      type: 'dog'
    },
    {
      name: 'Red',
      age: 1,
      type: 'cat'
    },
    {
      name: 'Joey',
      age: 3,
      type: 'dog'
    },
    {
      name: 'Rex',
      age: 10,
      type: 'dog'
    },
  ];

  let sum = 0
for (const iterator of data) {
    sum += iterator.age * 7
}
console.log(sum)
console.log(data.reduce((acc,val) => acc += val.age*7,0))

//Exercise 2
console.log(' cannotfillemailformcorrectly@gmail.com '.trim())

//Exercise 3
const users = [
    { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
    { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
    { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
    { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
    { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
    { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
    { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}
  ];
  
  const newUsers = users.map(e => {
    return { [e.firstName]: e.role };
  });
  
  console.log(newUsers);

  //Exercise 4
  const letters = ['x', 'y', 'z', 'z'];
  let result = {}
  for (const iterator of letters) {
    result.hasOwnProperty(iterator) ? result[iterator] ++ : result[iterator] = 1

  }
  console.log(result)

  console.log(  letters.reduce((acc, val) => (acc[val] = acc.hasOwnProperty(val) ? ++acc[val] : 1, acc), {})
  )