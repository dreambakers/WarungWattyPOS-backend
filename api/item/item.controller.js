const { Item } = require('./item.model');

const addItem = async ({body}, res) => {
    try {

        let item = new Item({...body.item});
        item = await item.save();

        res.json({
            success: 1,
            item
        });
    } catch (error) {
        console.log(error);
        res.json({
            success: 0,
            msg: 'An error occured while adding the item'
        });
    }
}

const getItems = async (req, res) => {
    try {
        const items = await Item.find({ });
        res.json({
            success: 1,
            items
        });
    } catch (error) {
        console.log(error);
        res.json({
            success: 0,
            msg: 'An error occured while getting the items'
        });
    }
}

module.exports = {
    addItem, getItems
};