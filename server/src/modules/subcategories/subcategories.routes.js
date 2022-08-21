const express = require('express');
const router = express.Router();
const SubcategoriesController = require('./subcategories.controller');

router.get("/get/all", SubcategoriesController.getSubcategories);
router.get("/get/by/:searchParams", SubcategoriesController.searchSubcategories);
router.post("/create", SubcategoriesController.createSubcategory);
router.patch("/update/:id", SubcategoriesController.updateSubcategory);
router.delete("/delete/:id", SubcategoriesController.deleteSubcategory);

module.exports = router;
