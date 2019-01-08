const express = require('express');
const router = express.Router();

const activityCrtl = require('../controllers/activity.ctrl')

router.get('/', activityCrtl.allActivities);
router.post('/', activityCrtl.createActivity);
router.get('/:id', activityCrtl.findByIdActivity);
router.put('/:id', activityCrtl.editActivity);
router.delete('/:id', activityCrtl.deleteActivity);

module.exports = router;