const express = require('express'),
    router = express.Router(),
    productsRoutes = require('../products/products.routes')

router.use('/products', productsRoutes)

module.exports = router