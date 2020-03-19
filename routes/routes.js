const express = require('express');
const router = express.Router();
const cors = require('cors');

router.use(cors());
router.options('*', cors());

const order = require("../api/order/order.index");
const user = require("../api/user/user.index");
const item = require("../api/item/item.index");

router
    .use('/order', order)
    .use('/user', user)
    .use('/item', item)

module.exports = router;