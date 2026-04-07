
const express=require("express");
const sql=require("mysql2");
const cors=require("cors"); // Import the CORS middleware ,cors is a package that allows you to enable Cross-Origin Resource Sharing (CORS) in your Express.js application. CORS is a security feature implemented by web browsers to restrict web pages from making requests to a different domain than the one that served the web page. By using the cors middleware, you can specify which domains are allowed to access your server's resources, enabling cross-origin requests and allowing your frontend application to communicate with your backend server without running into CORS issues.


const app=express();
app.use(express.json());
app.use(cors());
const db=sql.createConnection({
    host:"localhost",
    user:"root",
    password:"vedant8592",
    database:"vishwa123"    
});

app.get("/",(req,res)=>{
    res.end("from backend server 1");
})
app.get("/data",(req,res)=>{
    
    let sql=`SELECT * FROM employee_details`;
    db.query(sql,(err,result)=>{
        if(err) return res.status(500).json({err :"Database query failed"});
        res.json(result);
    });
});

app.post("/data",(req,res)=>{
    db.connect(err => {
    if (err) {
        console.error("DB connection failed ❌", err);
        return;
    }
    console.log("MySQL connected 🔥");
});
    const {Employ_id,Employ_name,age,salary,department}=req.body;
    let sql=`INSERT INTO employee_details (Employ_id,Employ_name,age,salary,deapartment) VALUES (?,?,?,?,?)`;
    db.query(sql,[Employ_id,Employ_name,age,salary,department],(err,result)=>{
        if(err) return res.status(500).json({err : "Database insertion failed"});
        res.json({message: "Data inserted successfully", result});
    });
});
app.listen(4000,()=>{
    console.log("server is running on port 4000");
});
