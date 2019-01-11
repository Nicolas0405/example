const mongoose = require('mongoose');
const User = require('../models/user.models')
const {Schema} = mongoose;

const reservationSchema = new Schema({
    codigo: {type:Number, required: true},
    tipoReserva: {type:String, required:true},
    fechaReserva:{type:Date, required:true},
    user : { type: Schema.Types.ObjectId, ref: User, required:true}
})

module.exports = mongoose.model('Reservation', reservationSchema);