const express = require("express");
const app = express();
const router = require("./routes");
const connectDB = require("./config/mongoDb");
connectDB();


app.use(express.json());   // 👈 MUST
app.use(router);

app.set("view engine","ejs");
app.get('/',(req,res)=>{
  res.render('home')
});

app.listen(4000, () => {
  console.log("Server running on port 4000");
});
//mongodb://localhost:27017