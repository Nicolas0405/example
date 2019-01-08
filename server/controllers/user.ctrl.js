const userModel = require('../models/user.models')
const userCtrl = {};

userCtrl.allUsers = async (req, res)=>{
    const users = await userModel.find();
    res.json(users);
}

userCtrl.createUser = async(req,res) =>{
    const newUser =  new userModel({
        cedula:req.body.cedula,
        nombre:req.body.nombre,
        apellido:req.body.apellido,
        correo: req.body.correo,
        contraseña: req.body.contraseña,
        telefono:req.body.telefono
    });
    await newUser.save();
    res.json({
        status : 'Usuario guardado'
    });
}

userCtrl.findByIdUser = async (req, res) =>{
    const userId = await userModel.findById(req.params.id);
    res.json(userId);
}

userCtrl.editUser = async (req,res)=>{
    const { id } =req.params;
    const userEdit={
        cedula:req.body.cedula,
        nombre:req.body.nombre,
        apellido:req.body.apellido,
        correo: req.body.correo,
        contraseña: req.body.contraseña,
        telefono:req.body.telefono
    };
    await userModel.findByIdAndUpdate(id,{$set: userEdit}, {new:true});
    res.json({
        status : 'Usuario actualizado'
    });
}

userCtrl.deleteUser = async(req, res)=>{
    await userModel.findByIdAndRemove(req.params.id);
    res.json({status: 'usuario Eliminado'})
}

module.exports = userCtrl;