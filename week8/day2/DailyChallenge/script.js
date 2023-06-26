let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        payed : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

const displayGroceries = () =>{
    groceries.fruits.forEach(element => {
        console.log(element)        

    });
}
const cloneGroceries = () =>{
    let user = client
    client = 'Betty'
    let shopping = groceries
    groceries.totalPrice = '35$'
    groceries.other.payed = false
}
cloneGroceries()