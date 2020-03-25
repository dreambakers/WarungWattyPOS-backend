const { Order } = require('./order.model');

const createOrder = async ({ body: { order } }, res) => {
    try {
        let newOrder = new Order(order);

        newOrder = await newOrder.save();

        res.json({
            success: 1,
            order: newOrder
        });
    } catch (error) {
        console.log(error);
        res.json({
            success: 0,
            msg: 'An error occured while creating the order'
        });
    }
}

const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find({});
        res.json({
            success: 1,
            orders
        });
    } catch (error) {
        console.log(error);
        res.json({
            success: 0,
            msg: 'An error occured while getting the orders'
        });
    }
}

module.exports = {
    createOrder, getAllOrders
};