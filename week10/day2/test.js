const express = require('express');
const bodyParser = require('body-parser')
const app = express();
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: true}))

app.post('/search', (req,res)=>{
    console.log(req.body)
    res.send('welcome,' + req.body.fullname)
})

app.listen(3000, () => console.log('Example app listening on port 3000!'));