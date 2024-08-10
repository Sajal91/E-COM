const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    items: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
    }],
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
})

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;