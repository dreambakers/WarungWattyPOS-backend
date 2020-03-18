const { mongoose } = require('../../db/connection');

const orderSchema = new mongoose.Schema({
    items: [
        {
            item: { type: mongoose.Schema.Types.ObjectId, ref: 'Item' },
            quantity: { type: Number }
        }
    ],
});

const Order = mongoose.model('Order', orderSchema);
module.exports = {
    Order
};