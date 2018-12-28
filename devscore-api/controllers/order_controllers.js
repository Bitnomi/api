var express = require('express');
var router = express.Router();
var Order = require('../models/order');



var get_all_orders = function(req, res, next) {
    res.send('get all orders');

}
var get_single_order = function(req, res, next) {

    res.send("get_single order");

}


var create_new_order = function(req, res, next) {
    const new_order = new Order({
        type: req.body.type,
        price: req.body.price,
        amount: req.body.amount,
        status: req.body.status,
        trading_partner: req.body.trading_partner,
        quantity: req.body.quantity
    });

    new_order.save().then(result => {
        res.status(200).json({
            docs: [new_order]
        });
    }).catch(err => {
        console.log(err);
    });
}



var edit_single_order = function(req, res, next) {
    res.send("edit a single order");

}

var delete_single_order = function(req, res, next) {
    // res.send('delete a single order');
    const oid = req.body.id;

    Order.findById(oid)
        .exec()
        .then(docs => {
            docs.remove();
            res.status(200).json({
                deleted: true
            });
        })
        .catch(err => {
            console.log(err)
        });

}


module.exports = { get_all_orders, get_single_order, create_new_order, edit_single_order, delete_single_order }