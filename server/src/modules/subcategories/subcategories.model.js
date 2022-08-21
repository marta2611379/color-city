const mongoose = require('mongoose');

const Subcategory = mongoose.Schema({
    title: {
        type: String,
        require: true,
        default: null,
        index: { unique: [true,] },
        minLength: [1, 'Name is too short!'],
    },
    category_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
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

module.exports = mongoose.model('Subcategory', Subcategory);
