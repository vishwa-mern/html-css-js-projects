const express = require('express');
const { clearScreenDown } = require('readline');
const exp = express();
exp.use(express.json());
//exp.use(express.urlencoded({ extended: true }));
//middleware to parse urlencoded data
let product =[];
exp.use((req,res,next)=>{
    const start = Date.now();
    console.log(start);
    console.log(req.method);
    console.log(req.url);
    next();
});
exp.post("/data",(req,res)=>{
    const incoming=Array.isArray(req.body)? req.body : [req.body];
    const added = [];
    for(const item of incoming){
        const {name,price}=item;
         if(!name || price===undefined){
            return res.status(400).json({error:"Name and price are required"});
         }
         if(typeof name !=="string" || typeof price !=="number"){
            return res.status(400).json({error:"Invalid data types for name or price"});
         }
            const newProduct={name,price};
            product.push(newProduct);
            added.push(newProduct);
    }

   return   res.json({ 
        message:"Data received successfully", 
        added
    });
});
exp.get("/products",(req,res)=>{
    if(product.length===0){
        return res.status(404).json({error:"No products found"});
    }
    return res.json(product);
    
});
exp.listen(4000,()=>{
    console.log("Server is running on port 4000");
});

    