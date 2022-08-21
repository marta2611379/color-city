const express = require('express');
const router = express.Router();
const BrandsController = require('./brands.controller');

router.get("/get/all", BrandsController.getBrands);
router.post("/create", BrandsController.createBrand);
router.patch("/update/:id", BrandsController.updateBrand);
router.delete("/delete/:id", BrandsController.deleteBrand);

module.exports = router;
