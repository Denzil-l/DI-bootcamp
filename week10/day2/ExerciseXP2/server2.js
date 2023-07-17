const express = require('express')
const app = express()
const port = 3000
app.use(express.static('public2'))


//Exercise 3
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/public2/exercise3.html');
})

app.listen(port,()=>{
    console.log(`Serve is workong in http://localhost:${port}/`)
})