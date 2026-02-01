const mongoose= require("mongoose");

const schemaName = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    time:{
        type:String
    }
});
const Todo = mongoose.model("Attendance", schemaName);

module.exports = Todo ;