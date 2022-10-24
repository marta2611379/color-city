const express = require('express');
const router = express.Router();
const ProductsController = require('./products.controller');
const multer = require("multer");

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now())
    }
})

var upload = multer({ storage: storage })
router.get("/get/all", ProductsController.getProducts);
router.get("/get/:id", ProductsController.getProductById);
router.post("/create", upload.array('files'), ProductsController.createProducts);
router.patch("/update/:id", ProductsController.updateProducts);
router.delete("/delete/:id", ProductsController.deleteProducts);

module.exports = router;
