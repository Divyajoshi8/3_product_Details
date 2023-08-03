const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.getProductList);
router.post('/products', productController.createProduct);

module.exports = router;
