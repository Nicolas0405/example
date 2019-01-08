const express = require('express');
const router = express.Router(); 

const reservationController = require('../controllers/reservation.ctrl');

router.get('/', reservationController.allReservation);
router.post('/', reservationController.createReservation);
router.get('/:id', reservationController.findByIdReservation);
router.put('/:id', reservationController.editReservation);
router.delete('/:id', reservationController.deleteReservation);

module.exports = router;