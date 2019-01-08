const mongoose = require('mongoose');
const {Schema} = mongoose;

const reservationSchema = new Schema({
    codigo: {type:Number, required: true},
    tipoReserva: {type:String, required:true},
    fechaReserva:{type:Date, required:true}
})

module.exports = mongoose.model('Reservation', reservationSchema);