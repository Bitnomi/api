var express = require('express');
var router = express.Router();
var controller = require("../controller.js");
var user_controller = require('../user_controller');

router.get('/items', controller.get_items);
router.get('/item/:item', controller.get_item);
router.post('/item', controller.create_new_item);
router.put('/item/:item', controller.edit_item);
router.delete('/item/:item', controller.delete_item);

router.get('/users', user_controller.get_all_users);
router.get('/users/:id', user_controller.get_single_user);
router.post('/users/', user_controller.create_new_user);
router.put('/users/:id', user_controller.edit_single_user);
router.delete('/users/:id', user_controller.delete_single_user);


module.exports = router;