const mongoose = require('mongoose');
const { Schema} = mongoose;

const messageSchema = new Schema({
    codigo: {type:Number, required: true},
    tipoMensaje: {type:String, required:true},
    texto:{type:Date, required:true}
})

module.exports = mongoose.model('Menssages', messageSchema);