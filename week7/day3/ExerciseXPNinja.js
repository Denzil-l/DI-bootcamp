// //Exercise 1
// const BMI = (w,h) =>{
//     return (w/(w*h))
// }
// const compareBMI = (first,second) =>{
//     if(first>second){
//         console.log('Person1 is bigger than Person2')

//     }else{
//         console.log('Person2 is bigger than Person1')

//     }
// }
// person1 = {
//     FullName : 'Denis Shukhat',
//     Mass : 74,
//     Height : 180,
//     func: BMI
// }
// person2 = {
//     FullName : 'Not Denis Shukhat',
//     Mass : 174,
//     Height : 280,
//     func: BMI
// }

// compareBMI(person1.func(person1.Mass,person1.Height),person2.func(person2.Mass,person2.Height))


//Exercise 2

function findAvg(gradesList){
    let avg = 0
    for (let i = 0; i < gradesList.length; i++) {
        avg+=gradesList[i]
    }
    avg = avg / gradesList.length
    console.log(avg)
    if (avg > 65) {
        console.log('+++++++++++YEah')
    }else{
        console.log('really sad')
    }
}

const gradesList = [1,2,3,4,5,666]
findAvg(gradesList)

function findAvg2(gradesList){
    let avg = 0
    for (let i = 0; i < gradesList.length; i++) {
        avg+=gradesList[i]
    }
    avg = avg / gradesList.length
    console.log(avg)
    return avg
}
function isItGoodorNot(avg){
    if (avg > 65) {
        console.log('+++++++++++YEah')
    }else{
        console.log('really sad')
    }
}

isItGoodorNot(findAvg2(gradesList))