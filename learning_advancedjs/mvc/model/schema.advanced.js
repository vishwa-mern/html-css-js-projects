const mongoose= require("mongoose");

const schemaName = new mongoose.Schema({
    name:{
        type:String,
        required:true
    }
    time:{
        type:String
    }
});
module.exports=mongoose.model("Attendence",schemaName);
