'use strict'
 const mongoose = require('mongoose');
 Schema = mongoose.Schema;

 let empschema = new Schema ({
    employeeId: {
        type: String,
        default:'',
        index:true,
        unique:true
    },
    employeeFname: {
        type:String,
        required:true
    },
    employeeLname: {
        type:String,
        required:true
    }
 })

 mongoose.model('employeeDetails', empschema)