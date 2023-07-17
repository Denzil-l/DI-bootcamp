const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const port = 3000
const array = [{
    name: 'xxx',
    price: 123
},{
    name: 'yyy',
    price: 321
}]

app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended:true}))

app.get('/items', (req,res)=>{
    let response = ''
    array.forEach(element => {
        response += `<h2>Name: ${element.name} Price: ${element.price}</h2>`
    });
    console.log(response)
    res.send(response)
})
app.get('/items/:id', (req,res)=>{
    let response = ''
    array.forEach((e,i) => {
        i == req.params.id ? response = `<h2>Name: ${e.name} Price: ${e.price}</h2>` : null

    });
    console.log(response)
    res.send(response)
})
app.post('/item',(req,res)=>{
    array.push({name:req.body.name, price : req.body.price})
    res.redirect('/items')
})


app.listen(port, ()=> console.log(`This server is working in port: ${port}`))