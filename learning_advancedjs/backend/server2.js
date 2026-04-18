const express = require("express");
const  sql = require("mysql2");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

const db = sql.createConnection({
    host:"localhost",
    user:"root",
    password:"vedant8592",
    database:"reactDb"
});
app.get("/",(req,res)=>{
    const sql = `create table  signup(
        id INT AUTO_INCREMENT PRIMARY KEY,
        first_name VARCHAR(255) NOT NULL,
        last_name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL

    )`
    db.query(sql,(err,result)=>{
        if(err){
            console.log("Error creating table:", err);
        } else {
            console.log("Table created successfully", result);
        }
    })  
    res.send("create table");
});
app.post("/",(req,res)=>{
    const {first_name,last_name,email,password,age} = req.body;
    const sql = "INSERT INTO signup (first_name, last_name, email, password) VALUES (?, ?, ?, ?)";
    db.query(sql,[first_name,last_name,email,password],(err,result)=>{
        if(err){
            console.log("Error inserting data:", err);
            res.status(500).send("Error inserting data");
        }
        else{
            console.log("Data inserted successfully", result);
            res.status(200).json({ message: "Data inserted successfully" }); 
    }
    });
});
app.get("/users",(req,res)=>{
    const sql ="SELECT * FROM signup";
    db.query(sql,(err,result)=>{
        if(err){
            console.log("Error fetching data:", err);
            res.status(500).send("Error fetching data");
        }
        else{
            console.log("Data fetched successfully", result);
            res.status(200).send(result);
        }
    });
});
app.get('/login',(req,res)=>{
    let sql=`create table login(
    personID int auto_increment primary key,
    email varchar(255) not null,
    Password varchar(255) not null
    );`
    db.query(sql,(err,result)=>{
        if(err){
            console.log("Error creating table:", err);
        } else {
            console.log("Table created successfully", result);
        }
    });
        res.send("create table");
});
app.post('/login',(req,res)=>{
    const {email,password} = req.body;
    const sql = "INSERT INTO login (email, password) VALUES (?,?)";
    db.query(sql,[email,password],(err,result)=>{
        if(err){
            console.log("Error inserting data:", err);
            res.status(500).send("Error inserting data");
        }
        else{
            console.log("Data inserted successfully", result);
            res.status(200).json({ message: "Data inserted successfully" });
        }
    });
});
app.get('/login',(req,res)=>{
    const sql = "select email,password from signup where exists(select * from login where login.email = signup.email and login.password = signup.password)";
    db.query(sql,(err,result)=>{
        if(err){
            console.log("Error fetching data:", err);
            res.status(500).send("Error fetching data");
        }
        else{
            console.log("Data fetched successfully", result);
            res.status(200).send(result);
        }
    });
});


app.listen(4000,()=>{
    console.log("server is running on port 4000");
}) ;
