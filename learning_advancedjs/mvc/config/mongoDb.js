const mongoose = require('mongoose');


const connectDB= async () =>{
    try{
       const connection =  await mongoose.connect(
  "mongodb+srv://birajdarvishwajeet931_db_user:mongo12345@cluster0.lb8besu.mongodb.net/Demo"
);
console.log("atlas are connected sucessfually");

    }
    catch(error){
        console.log(error);
        process.exit(1)
    }
}
module.exports=connectDB;