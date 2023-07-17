const express = require('express')
const { products } = require('./config/data.js');
const app = express()
const port = 3000
const bodyParser = require('body-parser');


// app.use(express.static('public'));
//use the module
// app.use(bodyParser.urlencoded({ extended: true }));


app.post('/search', (req, res) => {
    console.log(req.body)
    res.send('Great')
})


// app.get('/api/products/:id', (req,res)=>{
//     console.log(req.params);
//     console.log(req.query);
//     const productId = req.params.id;
//     const product = products.find((item) => item.id == productId);
//     if(!product) return res.status(404).json({msg: 'Product not found'})
//     res.json(product);
// })
// app.get('/tutorial', (req, res) => {
//     console.log(req)
//     res.send('Tutorial about express!')
// })
// app.get('/tutorial/notion/:id', (req, res) => {
//     //check if the parameter retrieved is a number
//     if (isNaN(req.params.id)) {
//         res.status(400).send('Bad request!') //error handler
//     } else {
//         res.send('Tutorial !')
//     }
// })
// app.get('/index', (req,res)=>{

// })

app.listen(port,()=>{
    console.log(`The Server ${port} is running`)
})