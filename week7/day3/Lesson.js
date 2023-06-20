// let str1 = 'Helblo'; let str2 = 'World';let str3 = ' '
// console.log(str1+str3+str2)
// console.log('43' == 43)
// console.log('aabaa' + 43 + 'bbbbb')
// console.log(str1.length)
// console.log(str1.indexOf('b'))
// let str4 = 'XXXXXYYYYYXXXXXX'
// console.log(str4.substring(1,3))
// let str6 = 'text'
// console.log(str6)
// console.log(str6.replace('t','x')
// )
// console.log(str6.concat('xxxx')
// )
// console.log(str6.toUpperCase()
// )
// console.log(str6.toLowerCase()
// )

// function fun1(){
//     let x = '   xxx xx  '.trim()
//     console.log(x)
//     console.log(x.trim())

// // }

// // fun1()

// let addressNumber = 30
// let addressStreet = 'Rivervud'
// let addresscountry = 'Vaitran'
// let globalAddress = addresscountry + ' ' + addressStreet + ' ' + addressNumber

// console.log('I live in '+globalAddress)

// let str7 = 'text'
// function Text(str) {
//     console.log(isNaN(str))
//     let x = 10
//     console.log(typeof(x.toString()))
// }
// Text(str7)
// let y = 10.1234
// console.log(y.toFixed(0))


// let mybirthyear = 1999
// let nextyear = 2024
// console.log('In the next year my age will ' + (nextyear - mybirthyear).toString())

// // alert('Hello')
// // let age = prompt('how old are you?')
// // alert(age)
// // let bol = confirm('Yes or No?')
// // alert(bol)

// let  x = 10; let a = 20; let z = 30
// let arr = [x,a,z]
// console.log(typeof(arr))
// console.log(typeof(x))

// let arr1 = [
//     [1,2,3],
//     [4,5,6,6,6,6],
//     [7,8,9]
// ]
// for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr1[i].length; j++) {
//         console.log(arr1[i][j])
//     }
    
// }

// let aa = 'xxx'
// let bb = 'zzz'

// let n = `Some text and ${aa} ${bb}`;console.log(n)

// for (let i = 0; i < arr1.length;i++){
//     arr1[i].push('x')
//     arr1[i].pop()
//     arr1[i].pop()
// }
// console.log(arr1)

// let array = ['cat','dog','fish','rabbit','cow']
// console.log(array)
// array.push('horse')
// let ind = array.indexOf('rabbit')
// array.splice(ind,1)
// console.log(array.length)

let obj = {}
obj = {
    x: 1,
    y: 2,
    z: 3
}
console.log(obj.x)
obj.a = 10
delete obj.x
console.log(obj)
x = 10
if(x >20){
    console.log('x')
}else if (x > 15){
    console('y')
}else{
    console.log('z')
}

const fruit = 'orange';

// switch (fruit) {
//   case 'apple':
//     console.log('Selected fruit is apple.');
//     break;
//   case 'banana':
//     console.log('Selected fruit is banana.');
//     break;
//   case 'orange':
//     console.log('Selected fruit is orange.');
//     break;
//   default:
//     console.log('Selected fruit is not apple, banana, or orange.');
// }
// let a = 2 + 2;

// switch (a) {
//   case 4:
//     console.log('Right!');
//     break;

//   case 3: // (*) grouped two cases
//   case 5:
//     console.log('Wrong!');
//     console.log("Why don't you take a math class?");
//     break;

//   default:
//     console.log('The result is strange. Really.');
// }
let names= ["john", "sarah", 23, "Rudolf",34]
for (let i = 0; i < names.length; i++){
    if(typeof(names[i]) != "string"){
        continue
    }else if(names[i][0] == names[i][0].toUpperCase()){
        continue

    }else{
        names[i] = names[i][0].toUpperCase() + names[i].slice(1)
        console.log(names[i])
    }
}