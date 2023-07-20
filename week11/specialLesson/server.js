const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const db = require('knex')({
    client:"pg",
    connection:{
        host:'127.0.0.1',
        user:'postgres',
        password:'0206',
        database: 'MiniProjectWithZiv',
        port: 5432
    }
})
dotenv.config()
const app = express()
app.use(cors())
app.set('db',db)
app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/',async (req,res)=>{
    console.log('I am here')
    const data = await db.select().from('test')
    console.log(data)
    res.render('index',{data : data})
})


app.listen(process.env.PORT || 3001,()=>console.log('Server is running'))