const mongoose = require('mongoose');
const { Schema } = mongoose;

const userScheme = new Schema({
    cedula:{type: Number, required: true},
    nombre:{ type: String, required: true},
    apellido:{type: String, required: true},
    correo:{type:String, required:true},
    contraseña:{type:String, required:true},
    telefono:{type:Number, required:true}
});

module.exports = mongoose.model('User', userScheme);