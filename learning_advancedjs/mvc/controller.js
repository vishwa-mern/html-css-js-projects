const totalAttendance = require("./model");
 addAttendence=(req,res)=>{
    const student = req.body.name;
    if (!student){
        return res.status(400).json({error:"name required"});
    }
    const entry={
        name:student,
        time:new Date().toLocaleTimeString()
    }
    totalAttendance.push(entry);
    res.json({
        message:"Attendance marked",
        entry
    })
    console.log(totalAttendance);

}
getAttendence=(req,res)=>{
    res.json(totalAttendance)
    
}
 
home=(req,res)=>{
    res.render('home',{attendance:totalAttendance})
};



module.exports={addAttendence,getAttendence,home};

