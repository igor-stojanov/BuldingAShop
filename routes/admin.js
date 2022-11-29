const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct);

// --- MySQL ---

// /admin/products => GET
// router.get('/products', adminController.getProducts);

// --- MySQL ---

// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);

// --- MySQL ---

// router.get('/edit-product/:productId', adminController.getEditProduct);

// router.post('/edit-product', adminController.postEditProduct);

// router.post('/delete-product', adminController.postDeleteProduct);

// --- MySQL ---

module.exports = router;
