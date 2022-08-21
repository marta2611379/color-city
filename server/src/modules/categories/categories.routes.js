const express = require('express');
const router = express.Router();
const CategoriesController = require('./categories.controller');

router.get("/get/all", CategoriesController.getCategories);
router.post("/create", CategoriesController.createCategory);
router.patch("/update/:id", CategoriesController.updateCategory);
router.delete("/delete/:id", CategoriesController.deleteCategory);

module.exports = router;
