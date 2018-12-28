var express = require('express');
var router = express.Router();
var controller = require("../controllers/item_controllers.js");
var user_controller = require('../controllers/user_controller');
var order_controller = require('../controllers/order_controllers');

router.get('/users/:uid/orders', order_controller.get_all_orders);
router.get('/users/:uid/orders/:oid', order_controller.get_single_order);
router.post('/users/:uid/orders', order_controller.create_new_order);
router.put('/users/:uid/orders/:oid', order_controller.edit_single_order);
router.delete('users/:uid/orders/:oid', order_controller.delete_single_order);

router.get('/users', user_controller.get_all_users);
router.get('/users/:uid', user_controller.get_single_user);
router.post('/users/', user_controller.create_new_user);
router.put('/users/:uid', user_controller.edit_single_user);
router.delete('/users/:uid', user_controller.delete_single_user);

router.get('/items', controller.get_items);
router.get('/item/:item', controller.get_item);
router.post('/item', controller.create_new_item);
router.put('/item/:item', controller.edit_item);
router.delete('/item/:item', controller.delete_item);





module.exports = router;