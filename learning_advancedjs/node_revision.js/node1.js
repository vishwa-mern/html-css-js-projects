let http = require('http');
http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type': 'text/html'});
res.write("<h1>Hello my name is vishwajeet <br/> i am a node.js developer</h1>");
res.end();
}).listen(3000);
