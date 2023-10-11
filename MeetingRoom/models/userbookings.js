const mongoose = require('mongoose')
Schema = mongoose.Schema;

let userBookSchema = new Schema ({
    employeeName: {
        type:String,
        required:true,
        index:true,
        unique:true
    },
    roomName: {
        type:String,
        required:true,
        index:true,
    },

    date: {
        type:Date,
        required:true,
    },
    startTime: {
        type:Number,
        required:true
    },
    endTime: {
    type:Number,
    required:true
    }
})

module.exports = mongoose.model('UserBookings', userBookSchema)