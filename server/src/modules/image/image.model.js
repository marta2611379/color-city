const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    image: Buffer,
    contentType: String
});


module.exports = new mongoose.model('Image', imageSchema);