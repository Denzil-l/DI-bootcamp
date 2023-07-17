const express = require('express')
const app = express()
const port = 3000

app.get('/',(req,res)=>{
    res.send('<h2>Some text</h2>')
})





app.listen(port,()=>{
    console.log(`Server is running in http://localhost:${port}/`)
})