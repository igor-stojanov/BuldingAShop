const express = require('express');
const path = require('path');
const shopController = require('../controllers/shop');

const adminData = require('./admin');

const router = express.Router();

router.get('/', shopController.getProducts);

router.get('/products', shopController.getProducts);

router.get('/cart', shopController.getProducts);

router.get('/checkout', shopController.getProducts);

module.exports = router;
