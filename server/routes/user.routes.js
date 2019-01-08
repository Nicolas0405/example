const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user.ctrl')

router.get('/', userCtrl.allUsers);
router.post('/', userCtrl.createUser);
router.get('/:id', userCtrl.findByIdUser);
router.put('/:id', userCtrl.editUser);
router.delete('/:id', userCtrl.deleteUser);

module.exports = router;