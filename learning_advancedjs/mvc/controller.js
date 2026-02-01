//const totalAttendance = require("./model/model.js");


//  addAttendence=(req,res)=>{
//     const student = req.body.name;
//     if (!student){
//         return res.status(400).json({error:"name required"});
//     }
//     const entry={
//         name:student,
//         time:new Date().toLocaleTimeString()
//     }
//     totalAttendance.push(entry);
//     res.json({
//         message:"Attendance marked",
//         entry
//     })
//     console.log(totalAttendance);

// }
// getAttendence=(req,res)=>{
//     res.json(totalAttendance)
    
// }
 
// home=(req,res)=>{
//     res.render('home',{attendance:totalAttendance})
// };



// module.exports={addAttendence,getAttendence,home};









const Todo = require("./model/schema.advanced.js");

// POST
const addAttendence = async (req, res) => {
  try {
    const student = req.body.name;

    if (!student) {
      return res.status(400).json({ error: "name required" });
    }

    const entry = await Todo.create({
      name: student,
      time: new Date().toLocaleTimeString()
    });

    res.json({
      message: "Attendance marked",
      entry
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET (API)
const getAttendence = async (req, res) => {
  try {
    const data = await Todo.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET (EJS page)
const home = async (req, res) => {
  try {
    const attendance = await Todo.find();
    res.render("home", { attendance });
  } catch (err) {
    res.status(500).send("Error loading page");
  }
};

module.exports = { addAttendence, getAttendence, home };
