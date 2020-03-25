const { mongoose } = require('../../db/connection');

const orderSchema = new mongoose.Schema({
    items: [{
        type: Object
    }]
},
    {
        timestamps: true
    });

const Order = mongoose.model('Order', orderSchema);
module.exports = {
    Order
};