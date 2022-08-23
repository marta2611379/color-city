const express = require('express');
const router = express.Router();
const ImageController = require('./image.controller');
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

router.post("/upload", upload.single('file'), ImageController.uploadImage);
router.get("/get/all", ImageController.getImage);

module.exports = router;
