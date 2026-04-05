let express = require('express');
let app = express();

app.use(express.json());

let product = [];
// POST
app.post('/data', (req, res) => {
    console.log( "data:", req.body);
  let incomingData = Array.isArray(req.body) ? req.body : [req.body];

  for (let item of incomingData) {
    const { id, name, age, salary, department } = item;

    // validation
    if (
      id === undefined || name === undefined ||
      age === undefined || salary === undefined || department === undefined
    ) {
      return res.status(400).json({ message: "Invalid data format" });
    }

    if (
      typeof id === 'number' &&
      typeof name === 'string' &&
      typeof age === 'number' &&
      typeof salary === 'number' &&
      typeof department === 'string'
    ) {
      product.push(item); 
    } else {
      return res.status(400).json({ message: "Invalid data types" });
    }
  }

  res.json({
    message: "Data stored successfully",
    product: product
  });
});


// GET
app.get('/products', (req, res) => {
  if (product.length === 0) {
    return res.json({ message: "No products available." });
  }
  
  res.json(
   // product.map(p=>`<br> id: ${p.id} - name: ${p.name} - age: ${p.age} - salary: ${p.salary} - department: ${p.department}`).join('<br>')
  product
);
});
// PUT
app.put('/update/:id',(req,res)=>{
    const id = parseInt(req.params.id);

    const { name, age, salary, department } = req.body;

    const productIndex = product.findIndex(p => p.id === id);

    console.log(productIndex);

    if (productIndex === -1) {
        return res.status(404).json({ message: "Product not found" });
    }

    // update all fields properly
    if (name !== undefined) product[productIndex].name = name;
    if (age !== undefined) product[productIndex].age = age;
    if (salary !== undefined) product[productIndex].salary = salary;
    if (department !== undefined) product[productIndex].department = department;

    res.json({ 
        message: "Product updated successfully", 
        product: product[productIndex] 
    });
});
app.patch('/updates/:id',(req,res)=>{
    const id = parseInt(req.params.id);// Extract the ID from the URL parameters
    console.log(req.params.id);
    const { name, age, salary, department } = req.body; // Extract the updated data from the request body
    const productIndex = product.findIndex(p => p.id === id); // Find the index of the product with the given ID
   if (productIndex === -1) {
        return res.status(404).json({ message: "Product not found" });
    }
    // Update the product details
    if (name !== undefined) product[productIndex].name = name;
    if (age !== undefined) product[productIndex].age = age;
    if (salary !== undefined) product[productIndex].salary = salary;
    if (department !== undefined) product[productIndex].department = department;
    res.json({ message: "Product updated successfully",
         product: product[productIndex]});
});
app.listen(6000, () => {
  console.log("Server running on http://localhost:6000");
});