const express = require('express'),
    router = express.Router(),
    productsRoutes = require('../modules/products/products.routes'),
    brandsRoutes = require('../modules/brands/brands.routes'),
    categoriesRoutes = require('../modules/categories/categories.routes'),
    subcategoriesRoutes = require('../modules/subcategories/subcategories.routes'),
    imageRoutes = require('../modules/image/image.routes')

router.use('/products', productsRoutes);
router.use('/brands', brandsRoutes);
router.use('/categories', categoriesRoutes);
router.use('/subcategories', subcategoriesRoutes);
router.use('/img', imageRoutes);

module.exports = router