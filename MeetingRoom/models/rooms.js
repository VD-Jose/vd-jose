const mongoose = require('mongoose')
Schema = mongoose.Schema;

let roomSchema = new Schema ({
    roomId: Number,
    roomName:string
})

mongoose.model('Rooms', roomSchema)

