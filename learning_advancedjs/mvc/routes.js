
const express=require("express");
const router = express.Router();
const {addAttendence,getAttendence,home}=require("./controller");
router.post("/mark",addAttendence);
router.get("/totalAttendence",getAttendence);
router.get("/",home);

module.exports=router


