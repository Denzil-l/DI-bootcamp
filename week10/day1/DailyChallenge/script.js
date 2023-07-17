
//Part 1
let allExports = require('./main.js')
const b = 5
console.log(allExports.largeNumber + b)

//Part 2

const http = require('http')
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html')
    res.end(`<p>My Module is ${allExports.largeNumber + b}</p><h1>Hi there at the frontend</h1>`);

  });
  server.listen(3000, () => {
    console.log("I'm listening");
  });

//Part 3

// const http = require('http')
// const server2 = http.createServer((req, res) => {
//   res.setHeader('Content-Type', 'text/html');
//   res.end(`<p>Current Date and Time: ${allExports.getCurrentDateTime()}</p>`);
// });

// server2.listen(8080, () => {
//   console.log("New server is working");
// });