const addOperator = (x,y) =>{
    return (x + y)
}
const divideOperator = (x,y) =>{
    return (x / y)
}

module.exports = {
    add : addOperator,
    div : divideOperator
}
console.log(addOperator(1,2))