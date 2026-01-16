const http=require('http');
const server=http.createServer((req,res)=>
    {
        if (req.url==='/'){
            res.end("home page");
        }
        else if (req.url==='/about'){
            res.end("about page");
            console.log("about page visited");
        }
        else{
            res.end("error page");
        }
    });
server.listen(4000);