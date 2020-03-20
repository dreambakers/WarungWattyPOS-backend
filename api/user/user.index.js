const express = require('express');
const controller = require('./user.controller')
const router = express.Router();
const { authenticate } = require('../../middleware/authenticate');

router
    .post('/', controller.signUp)
    .post('/login', controller.login)
    .get('/getAllUsers', authenticate, controller.getAllUsersExcept)
    .post('/logout', authenticate, controller.logout)
    .post('/delete', authenticate, controller.deleteUser)
module.exports = router;