let http = require("http");
// const server = http.createServer( () => {
//     console.log('I am listening....');
//  });
//  server.listen(4000);
const server = http.createServer((req,res)=>{
    res.writeHead(200)
    res.end("hello wold\n")
}).listen(4000)