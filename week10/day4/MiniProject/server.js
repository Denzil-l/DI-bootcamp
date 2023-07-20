
const express = require('express')
const app = express()
const p4ssw0rd = require('p4ssw0rd');

const db = require('knex')({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: '0206',
        database: 'MiniProject',
        port: 5432
    }
});

app.set("db", db);
app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use(express.json());



app.get('/',async (req,res)=>{
    res.render('index')
})

app.post('/signin', async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;
    console.log(username);
    console.log(password);
    const search = await db('register').where({ username: username }).first();
    if(search){
      if (p4ssw0rd.check(password, search.password)) {
        await db('login').insert({ username, password });
        await db('register')
          .where({ username })
          .update({ last_login_date: new Date() });
        res.status(200).json({ success: true });
      } else {
        res.status(404).json({ success: false });
      }
    }else{
      res.status(404).json({ success: false });
    }
   
  } catch (error) {
    console.error(error);
  }
});

app.post('/signup',async (req,res)=>{
    try {
        const hashedPassword = p4ssw0rd.hash(req.body.password);

        await db('register').insert({
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          email: req.body.email,
          username: req.body.username,
          password: hashedPassword,
          created_date: new Date(), // Задаем текущую дату и время в поле "created_date"
        });
    
        res.status(200).json({ success: true });
      } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'An error occurred during signup' });
      }
})


app.listen(3000,()=>{
    console.log('Server is working as usual')
})