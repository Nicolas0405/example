const messageModel = require('../models/message.model');
const messageCtrl = {};

messageCtrl.allMessagges = async (req, res) =>{
    const message = await messageModel.find();
    res.json(message);
}

messageCtrl.createMessagges = async (req, res) =>{
    const newMessage = new messageModel({
        codigo: req.body.codigo,
        tipoMensaje: req.body.tipoMensaje,
        texto:req.body.texto
    });
    await newMessage.save();
    res.json({status: 'Mensaje creado'});
}

messageCtrl.findByIdMessages = async (req, res) =>{
    const message = await messageModel.findById(req.params.id);
    res.json(message);
}

messageCtrl.editMessage = async (req, res) =>{
    const {id} = req.params;
    const messageEdit={
        codigo: req.body.codigo,
        tipoMensaje: req.body.tipoMensaje,
        texto:req.body.texto
    };
    await messageModel.findByIdAndUpdate(id,{$set: messageEdit},{new: true});
    res.json({status: 'Menssage Actualizado'})
}

messageCtrl.deleteMessage = async (req, res) =>{
    await messageModel.findByIdAndRemove(req.params.id);
    res.json({status: 'Message Eliminado'});
}

module.exports=messageCtrl;