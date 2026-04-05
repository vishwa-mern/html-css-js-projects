const http = require('http');

http.createServer((req, res) => {
    
  console.log("Request aayi:", req.url);

  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<h1>Hello, World!</h1> <p style="color: blue;">Welcome to my Node.js server.</p>  ');
}).listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});