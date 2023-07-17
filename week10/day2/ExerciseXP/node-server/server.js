//Exercise 2
const user = {
    firstname: 'John',
    lastname: 'Doe'
}
const http = require('http')
const server = http.createServer((req,res)=>{

    res.setHeader('Content-Type', 'application/json');


    res.end(JSON.stringify(user))
})

server.listen(8080)
console.log('Server is working')