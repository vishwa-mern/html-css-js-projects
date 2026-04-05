let express = require('express');
let app = express();
app.use(express.json());

let product =[];

app.get('/express',(req,res)=>{
res.writeHead(200, {'Content-Type': 'text/html'});
res.end('<h1>Hello, World!</h1> <p style="color: blue;">Welcome to my Express.js server.</p>  ');
})
app.post('/data',(req,res)=>{
    console.log("Received data:", req.body);
    let incomigData = Array.isArray(req.body)?req.body:[req.body];// Check if the incoming data is an array, if not, wrap it in an array
    const added=[];
    incomigData.forEach((item)=>{
        if(item.name===undefined || item.price===undefined){
            res.status(400).json({message: "Invalid data format. Each item must have 'name' and 'price' properties."});
            return;
        }
        if(typeof item.name === 'string' && typeof item.price === 'number'){
            product.push(item);
            added.push(item);
        }   
        
    })
    res.json({message: "Data received and stored.", added: added});
})

app.get('/products',(req,res)=>{
if(product.length===0){
    res.json({message: "No products available."});
}else{
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>Products</h1><ul>' + product.map(p => `<li>${p.name} - $${p.price.toFixed(2)}</li>`).join('') + '</ul>'    );
}
});
app.listen(3000,()=>{
    console.log("Server running on http://localhost:3000");//
});