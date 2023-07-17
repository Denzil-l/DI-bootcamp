const bodyParser = require('body-parser')
const express = require('express')


const app = express()


app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:true}))

app.post('/',(req,res)=>{
    console.log(req.body)
    const str = `
    <h2>${req.body.name}</h2>
    <h2>${req.body.address}</h2>
    <h2>${req.body.phone}</h2>
    <h2>${req.body.email}</h2>
    `
    res.send(str)
})

app.listen(3001, ()=> console.log('Server is running on port 3001'))