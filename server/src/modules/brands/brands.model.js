const mongoose = require('mongoose');

const Brand = mongoose.Schema({
    title: {
        type: String,
        require: true,
        default: null,
        index: { unique: [true,] },
        minLength: [1, 'Name is too short!'],
    },
    status: {
        type: String,
        default: 'active',
        require: true,
        enum: ['active'],
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Brand', Brand);
