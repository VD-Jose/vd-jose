const mongoose = require('mongoose')
Schema = mongoose.Schema;

let bookingIdSchema = new Schema ({
    bookingId: Number,
    
})

mongoose.model('BookingId', bookingIdSchema)