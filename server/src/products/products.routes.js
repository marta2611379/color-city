const express = require('express');
const router = express.Router();
const ProductsController = require('./products.controller');

// router.use(async (req, res, next) => {
//     let data = await ProductsService.getUsers()

//     if (data) {
//         req.users = data
//         next()
//     } else
//         return res
//             .status(500)
//             .send({ message: 'Error while getting users' })
// })



// ProductsController = require('./products.controller')
router.get("/", ProductsController.getUsers);

module.exports = router;
