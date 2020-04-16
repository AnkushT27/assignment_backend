const express = require('express');
const userController = require('../controllers/userController')
const router = express.Router();

router.get('/users', userController.getUser);
router.get('/users/:id', userController.getUserById);
router.post('/users', userController.addUser);
router.post('/users/:id', userController.updateUser)


module.exports = router;