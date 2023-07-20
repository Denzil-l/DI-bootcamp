const express = require('express')
const app = express()
app.use(express.static('public'));


let menu = [
    {
        name: "Margarita",
        price: 10,
        ingredients: ["Tomato Sauce", "Mozzarella", "Basil"]
    },
    {
        name: "Bianca",
        price: 13,
        ingredients: ["Ricotta", "Mozzarella", "Garlic"]
    },
    {
        name: "Etna",
        price: 14,
        ingredients: ["Tomato sauce", "Mozzarella", "Anchovies", "Capers", "Olives"]
    }
]
app.set('view engine', 'ejs')

app.get('/',(req,res)=>{
    res.render('index',{ nameRestaurant: "Papa Pizzaaaaaa", pizzaMenu: menu })
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.listen(3000,()=>{
    console.log('This server is running on port number 3000')
})