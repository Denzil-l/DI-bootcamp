const express = require('express')
const app = express()
const port = 3000
const user = {firstname: 'John',lastname: 'Doe'}
app.use(express.static('public'))

//Exercise 1

app.get('/users',(req,res)=>{

res.json(user)
})
//Exercise 2
app.get('/:id',(req,res)=>{
    const response = req.params
    res.json(response)
})


app.listen(port,()=>{
    console.log(`Serve is workong in http://localhost:${port}/`)
})