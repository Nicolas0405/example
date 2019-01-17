const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user.ctrl')

router.get('/', userCtrl.consultarUsuario);
router.post('/', userCtrl.crearUsuario);
router.get('/:id', userCtrl.consultarUsuarioPorId);
router.put('/:id', userCtrl.editarUsuario);
router.delete('/:id', userCtrl.eliminarUsuario);

module.exports = router;