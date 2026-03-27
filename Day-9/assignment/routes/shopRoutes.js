const path = require('path');

const express = require('express');

const productsController = require('../controllers/productController');

const router = express.Router();

router.get('/', productsController.getProducts);

module.exports = router;
