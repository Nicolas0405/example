const activityModel = require('../models/activity.model');
const activityCtrl = {};

activityCtrl.allActivities = async(req,res )=>{
    const activities = await activityModel.find();
    res.json(activities);
}

activityCtrl.createActivity = async(req,res)=>{
    const newActivity = new activityModel({
        codigo : req.body.codigo,
        nombreActividad: req.body.nombreActividad,
        tipoActividad: req.body.tipoActividad ,
        lugarActividad: req.body.lugarActividad,
        fechaActividad: req.body.fechaActividad
    });
    await newActivity.save();
    res.json({
        'status': 'Actividad Guardada'
    });
}

activityCtrl.findByIdActivity = async (req,res)=>{
    const activityId = await activityModel.findById(req.params.id);
    res.json(activityId);
}

activityCtrl.editActivity = async (req,res) => {
    const{id} = req.params;
    const editActivity = {
        codigo : req.body.codigo,
        nombreActividad: req.body.nombreActividad,
        tipoActividad: req.body.tipoActividad ,
        lugarActividad: req.body.lugarActividad,
        fechaActividad: req.body.fechaActividad
    };
    await activityModel.findByIdAndUpdate(id, {$set: editActivity}, {new: true});
    res.json({
        'stats': 'Actividad actualizada'
    });
}

activityCtrl.deleteActivity = async(req, res)=>{
    await activityModel.findByIdAndRemove(req.params.id);
    res.json({'status': 'Actividad Eliminada'})
}

module.exports = activityCtrl;