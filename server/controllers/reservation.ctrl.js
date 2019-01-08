const reservationModel = require('../models/reservation.model');
const reservationCtrl = {};

reservationCtrl.allReservation = async (req, res) =>{
    const reservation = await reservationModel.find();
    res.json(reservation);
}

reservationCtrl.createReservation = async ( req, res) =>{
    const newReservation = new reservationModel({
        codigo: req.body.codigo,
        tipoReserva: req.body.tipoReserva,
        fechaReserva:req.body.fechaReserva
    });
    await newReservation.save();
    res.json({status: 'Reservacion creada'});
}

reservationCtrl.findByIdReservation = async (req, res) =>{
    const  reservation = reservationModel.findById(req.params.id)
    res.json(reservation);
}

reservationCtrl.editReservation =  async(req, res) =>{
    const {id} = req.params;
    const editReservation = {
        codigo: req.body.codigo,
        tipoReserva: req.body.tipoReserva,
        fechaReserva:req.body.fechaReserva
    };
    await reservationModel.findByIdAndUpdate(id, {$set: editReservation}, {new: true});
    res.json({status:'reserva actualizada'});
}

reservationCtrl.deleteReservation = async (req, res) =>{
    await reservationModel.findByIdAndRemove(req.params.id);
    res.json({status: 'Reserva eliminada'})
}

module.exports = reservationCtrl;