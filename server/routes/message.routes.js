const express = require('express');
const router = express.Router();

const messageCtrl = require('../controllers/message.ctrl');

router.get('/', messageCtrl.allMessagges);
router.post('/', messageCtrl.createMessagges);
router.get('/:id', messageCtrl.findByIdMessages);
router.put('/:id', messageCtrl.editMessage);
router.delete('/:id', messageCtrl.deleteMessage);

module.exports = router;