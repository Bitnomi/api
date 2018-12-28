var mongoose = require('mongoose');
var order_schema = new mongoose.Schema({
    type: String,
    price: Number,
    quantity: Number,
    amount: Number,
    trading_partner: String,
    status: String,

});

var Order = mongoose.model('Order', order_schema);

module.exports = Order;