const bodyParser = require('body-parser')
const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended:true}))

app.get('/aboutMe/:hobby', (req, res) => {
    const hobby = req.params.hobby;
  
    if (typeof hobby === 'string') {
      res.send(`<h1>Hobby: ${hobby}</h1>`);
    } else {
      res.status(404).send('Invalid hobby');
    }
  });

  app.get('/pic', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'pic.html'));
  });
  
  app.get('/form', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'form.html'));
  });

  app.post('/formData', (req, res) => {
    const { email, message } = req.body;
  
    console.log(`${email} sent you a message: ${message}`);
    res.send(`${email} sent you a message: ${message}`);
  });

  app.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
  });