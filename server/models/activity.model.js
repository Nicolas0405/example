const mongoose = require('mongoose');
const {Schema} = mongoose;

const activityScheme = new Schema({
    codigo :{type:Number, require:true},
    nombreActividad :{type:String, require:true},
    tipoActividad :{type:String, require:true},
    lugarActividad :{type:String, require:true},
    fechaActividad :{type:Date, require:true}
})

module.exports = mongoose.model('Activity', activityScheme);