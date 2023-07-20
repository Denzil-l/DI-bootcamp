const express = require('express')
const fs = require('fs').promises


const app = express()



app.use(express.static('public'))
app.use(express.json())
app.set('view engine', 'ejs')

app.get('/login',(req,res)=>{
    res.render('login')
})

app.get('/register',(req,res)=>{
    res.render('register')
})

app.post('/signin',async (req,res)=>{
    const data = req.body
    try {
        
    
    let database = await fs.readFile('user.json')
    database =  JSON.parse(database)    
    let check = false
    database.forEach(element => {
        if(element.username == data.username && element.password == data.password){
            check = true
        }
    });
    check ? res.status(200).json({ success: true }) : res.status(404).json({ success: false })
} catch (error) {
        
}
})
app.post('/signup',async (req,res)=>{
    try {
    console.log('3')
    
    const data = req.body
    let database = await fs.readFile('user.json')
    if(database.length != 0 ){

        database = JSON.parse(database)
        console.log('1')
    }else{
        database = [];
        console.log('2')
    }
        let check = false
        console.log(`xx: ${database}`)
        console.log(database)
        database.forEach(element => {
            check = (element.username == data.username) ? true : false
        });
        if(check){
            res.status(404).json({success: false})
        }else{
            database.push({ firstName: data.firstName, lastName: data.lastName, email: data.email, username: data.username, password: data.password })
            await fs.writeFile('user.json', JSON.stringify(database, null, 2));
            res.status(200).json({success: true})

        }
        } catch (error) {
        console.log(error)
        }
})
app.listen(3000, ()=>{
    console.log('Server is working correctly')
})