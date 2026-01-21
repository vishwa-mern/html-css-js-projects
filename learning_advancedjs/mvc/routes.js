
const express=require("express");
const router = express.Router();
const {addAttendence,getAttendence}=require("./controller");
router.post("/mark",addAttendence);
router.get("/totalAttendence",getAttendence);
module.exports=router


