const express = require('express');
const app = express();


const db = require('knex')({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: '0206',
        database: 'dvdrental',
        port: 5432
    }
});
app.get('/', async (req, res) => {
    try {
       const result =  await db('actor').returning(['actor_id','first_name','last_name']).insert({first_name: 'XXXX', last_name :'YYYY', })
        
       res.send(result)
    } catch (error) {
        console.error(error)
    }
    
    

})
app.set("db", db);
app.listen(3000, () => console.log('Example app listening on port 3000!'));
