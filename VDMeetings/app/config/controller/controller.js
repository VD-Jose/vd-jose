const shortid=require('shortid');
const mongoose=require('mongoose');


//models

const emplyepath = require('./../models/employee');
const employeeDetails = mongoose.model('employeeDetails');
const roompath = require('./../models/rooms');
const rooms = mongoose.model('rooms');
const ubookpath = require('./../models/userBookings');
const userBookings = mongoose.model('userBookings')

//get all employees code

 
let getallemplyes=(req,res)=>{
    employeeDetails.find()
    .exec((err,result)=>{
        if(err){
            let apiResponse=response.generate(true,'Failed To Get All Users',500,null);
            res.send(apiResponse);
        }
        else {
         let apiResponse=response.response(false,'Users Are Found',200,result);
        res.send(apiResponse)
        }
    })
}



//create event code start

let newbooking=(req,res)=>{
    let newbooking=new EventModel({
        BookingId: shortid.generate(),
        employeeName: req.body.employeeName,
        roomName: req.body.roomName,
        date: req.body.date,
        startTime: req.body.startTime,
        endTime: req.body.endTime,

    })

    newbooking.save((err,result)=>{
        if (err) {
            let apiResponse = response.response(true,'Failed to register Event', 500, null)
            res.send(apiResponse)
        } else if (check.isEmpty(result)) {
            let apiResponse = response.response(true,'Event not found', 404, null)
            res.send(apiResponse)
        } else {
            let apiResponse = response.response(false, 'Event created', 200, result)
            res.send(apiResponse)
        }
    })
}

//get all bookings code strat
let getallbookings=(req,res)=>{
    userBookings.find()
    .exec((err,result)=>{
        if(err){
            res.send(err);
        }
        else {
        res.send(result)
        }
    })
  }

  //delete booking code start
let deletebooking=(req,res)=>{
    userBookings.deleteOne({BookingId:req.body.BookingId},(err,result)=>{
        if(err){
        let apiResponse=response.response(true,'some error occured',500,null)
        res.send(apiResponse)
        }
        else {
            let apiResponse=response.response(false,"Events Is Deleted Successfully",200,result);
            res.send(apiResponse)
        }
    })
}
//delete booking code end

//edit booking code start
let updatebooking=(req,res)=>{
    let options=req.body;
    userBookings.update({BookingId:req.body.BookingId},options,{multi:true}).exec((err,result)=>{
        if(err){
            logger.captureError('some error occured','update event',6)
        let apiResponse=response.response(true,'some error occured',403,null)
        res.send(apiResponse)
        }
        else {
            let apiResponse=response.response(false,"Events Is Updated Successfully",200,result);
            res.send(apiResponse)
        }
    })
}
//edit booking code end

module.exports = {
    getallemplyes: getallemplyes,
    newbooking: newbooking,
    getallbookings:getallbookings,
    deletebooking:deletebooking,
    updatebooking:updatebooking



}

