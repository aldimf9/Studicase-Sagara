const express = require('express');
const router = express.Router();
const taskController = require('../controllers/controllerTask');
const authenticateUser = require('../config/jwt');

router.post('/addTaks',authenticateUser,taskController.ControlladdTasks);
router.get('/user',authenticateUser,taskController.ControllgetAllTasks);
router.put('/editUser',authenticateUser,taskController.ControllupdateTasks);
router.delete('/deleteUser/:id',authenticateUser,taskController.ControlldeleteTasks);


module.exports = router;
