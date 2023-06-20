const numbers = [5,0,9,1,7,4,2,6,3,8];
str1 = numbers.toString()
str2 = numbers.join('+')
str3 = numbers.join(' ')
str4 = numbers.join('-')
console.log(str1)
console.log(str2)
console.log(str3)
console.log(str4)

console.log(numbers)
for (let j = 0; j < numbers.length; j++) {
    for (let i = 0; i < numbers.length - 1; i++) {
        if(numbers[i] < numbers[i+1]){
            let x = numbers[i]
            numbers[i] = numbers[i+1]
            numbers[i+1] = x
        }
    }
}

console.log(numbers)
