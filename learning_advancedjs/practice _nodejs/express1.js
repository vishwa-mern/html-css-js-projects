// const express = require("express");
// const app = express();
// app.get("/",(req,res)=>{
//     res.setHeader("Content-Type", "text/html");
//     res.write("<h1 style=\"color:red;\">Hello World</h1>");
//     res.end();
// });
// app.get("/style",(req,res)=>{
//     res.setHeader("content-type","text/css");
//     res.write("h1{color:red;}");

// })
// app.post("/about",(req,res)=>{
//     res.end("about page");
//     console.log("about page visited");
// });
// app.listen(4000,() => {
//     console.log("Server is running on port 4000");
// });

const express=require("express");
const exp=express();
//middleware to parse urlencoded data
exp.use((req,res,next)=>{
    const start = Date.now();
    console.log(req.method);
    console.log(req.url);
    next();
    const duration = Date.now() - start;
    console.log(`Time taken: ${duration}ms`);
    console.log(`${req.host} ${req.method} ${req.url} `);
});
exp.get("/",(req,res)=>{
    res.setHeader("Content-Type", "text/html");
    res.end(`
      <h2>Home Page</h2>
      <form action="/about" method="POST">
          <button type="submit">POST bhejo</button>
        </form>
    `);
});
exp.post("/about",(req,res)=>{
    res.end("about page");
    console.log("about page visited");
});
exp.listen(4000,()=>{
    console.log("Server is running on port 4000");
});   
    
