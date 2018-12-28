var express = require('express');
var router = express.Router();
var Order = require('../models/order')


// respond with all the items
var get_items = function(req, res, next) {
        res.send('get all items');

    }
    // respond with a single item
var get_item = function(req, res, next) {

    res.send("get_single item");

}


var create_new_item = function(req, res, next) {
    res.send('create new item');

}

var edit_item = function(req, res, next) {
    res.send("edit a single item");

}

var delete_item = function(req, res, next) {
    res.send('delete a single item');
}






module.exports = { get_items, get_item, edit_item, delete_item, create_new_item }