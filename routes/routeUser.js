const express = require('express');
const router = express.Router();
const userController = require('../controllers/controllerUser');
const authenticateUser = require('../config/jwt');

router.post('/login', userController.login);
router.post('/logout', authenticateUser, userController.logout);
router.post('/addUser',userController.ControlladdUser);
router.get('/user',authenticateUser,userController.ControllgetAllUsers);
router.put('/editUser',authenticateUser,userController.ControllupdateUser);
router.delete('/deleteUser/:id',authenticateUser,userController.ControllupdateUser);


module.exports = router;
