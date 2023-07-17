//Exercise 1

const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url == '/one'){
        console.log('User in the page /one')
        res.end('One')
    }else if(req.url == '/two'){
        console.log('User in the page /two')

        res.end('Two')
    }else{
        console.log('User in the middle of nowhere')

        res.end('Something Else')

    }
})

server.listen(3000)
console.log('Server is working')