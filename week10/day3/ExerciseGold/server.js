const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const fs = require('fs').promises

app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))

app.get('/items',async(req,res)=>{
    try {
        const response = await fs.readFile('data.json','utf-8')
        res.status(200).send(response)
    } catch (error) {
        console.error(error)
    }
})
app.get('/items/:id',async(req,res)=>{
    try {
        let id = req.params.id
        let response = JSON.parse(await fs.readFile('data.json','utf-8'))
        console.log(response)
        if(response && id < response.length){
            response = response[id]
            res.status(200).send(response)
 
        }
    } catch (error) {
        console.error(error)
    }
})

app.post('/items',async (req,res)=>{
   
    try {
        console.log(req.body)
        console.log('x')
        let data = await fs.readFile('data.json','utf-8')
        if(!data){
            data = []
        }else{
            data = JSON.parse(data)
        }
        data.push(req.body)
        await fs.writeFile('data.json',JSON.stringify(data))
        res.redirect('/items')
    } catch (error) {
        console.error(error)
    }

})


app.listen(3000,()=>{
    console.log('This server is running on port number 3000')
})