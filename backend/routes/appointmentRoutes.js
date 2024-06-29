const express=require("express");
const router=express.Router();
const appoinmentController=require("../controllers/appointmentController");


router.post('/addappointment',appoinmentController.addAppointement);
// router.get('/pastappointments/:Id',appoinmentController.pastAppointments)


module.exports=router;