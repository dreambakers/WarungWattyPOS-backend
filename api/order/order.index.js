const express = require('express');
const controller = require('./order.controller')
const { authenticate } = require('../../middleware/authenticate');

const router = express.Router();

router
    .post('/', controller.createOrder)
    .get('/all', controller.getAllOrders)

module.exports = router;