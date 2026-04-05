const express=require("express");
const sql=require("mysql2");
const cors=require("cors");
const app=express();
app.use(express.json());
app.use(cors());
const db=sql.createConnection({
    host:"localhost",
    user:"root",
    password:"vedant8592",
    database:"vishwa123"    
})


app.get("/",(req,res)=>{
    res.end("from backend server 1 😀 ");
})
app.get("/data",(req,res)=>{
    let sql=`SELECT * FROM employee_details`;
    db.query(sql,(err,result)=>{
        if(err) return res.status(500).json({error: "Database query failed"});
        res.json(result);
    });
});
app.listen(4000,()=>{
    console.log("server is running on port 4000");
});
