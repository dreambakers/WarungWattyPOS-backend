const { mongoose } = require('../../db/connection');

const ItemSchema = new mongoose.Schema({
    name: { type: String },
    price: { type: Number },
    type: {
        type: String,
        enum: ['item', 'meal'],
        default: 'item'
    }
});

const Item = mongoose.model('Item', ItemSchema);
module.exports = {
    Item
};