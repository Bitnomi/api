var express = require('express');
var router = express.Router();



var get_all_users = function(req, res, next) {
    res.send("get all users");
}


var get_single_user = function(req, res, next) {
    res.send("get single user");

}


var create_new_user = function(req, res, next) {
    res.send("create new user");
}

var edit_single_user = function(req, res, next) {
    res.send("edit single user");


}

var delete_single_user = function(req, res, next) {
    res.send("delete single user");
}


module.exports = { get_all_users, get_single_user, create_new_user, edit_single_user, delete_single_user }