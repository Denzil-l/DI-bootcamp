//Exercise 1

const http = require('http')

// const server = http.createServer((req,res)=>{
//     if(req.url == '/one'){
//         console.log('User in the page /one')
//         res.end('One')
//     }else if(req.url == '/two'){
//         console.log('User in the page /two')

//         res.end('Two')
//     }else{
//         console.log('User in the middle of nowhere')

//         res.end('Something Else')

//     }
// })


const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html');
    
    res.write('<h1>One</h1>');
    res.write('<p>Two</p>');
    res.write('<p>Three</p>');
    res.end('<p>End</p>');
});

server.listen(3000)
console.log('Server is working')