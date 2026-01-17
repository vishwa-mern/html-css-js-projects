const express = require("express");
const app = express();
app.get("/",(req,res)=>{
    res.setHeader("Content-Type", "text/html");
    res.write("<h1 style=\"color:red;\">Hello World</h1>");
    res.end();
});
app.get("/style",(req,res)=>{
    res.setHeader("content-type","text/css");
    res.write("h1{color:red;}");

})
app.listen(4000,() => {
    console.log("Server is running on port 4000");
})