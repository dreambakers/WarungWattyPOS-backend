const express = require('express');
const controller = require('./item.controller')
const { authenticate } = require('../../middleware/authenticate');

const router = express.Router();

router
    .post('/', authenticate, controller.addItem)
    .get('/all', authenticate, controller.getItems)
    .post('/update', authenticate, controller.editItem)
module.exports = router;