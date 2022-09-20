const mongoose = require('mongoose');
const imageSchema = new mongoose.Schema({
    image: Buffer,
    contentType: String
});

const goodSchema = mongoose.Schema({
    unit: {
        type: String,
        required: true, enum: ['kg', 'l'],
    },
    volume: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    code: {
        type: String,
        required: true,
    },
    colors: {
        type: String,
        required: true,
    },
    available_quantity: {
        type: Number,
        required: true,
    },
    degree_brilliance: {
        type: String,
        required: false,
    }
});


const Product = mongoose.Schema({
    imgs: { type: [{ img: imageSchema }], required: true, },
    title: {
        type: String,
        require: true,
        default: null,
        index: { unique: [true,] },
        minLength: [1, 'Name is too short!'],
    },
    manufacturer_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Brand",
        required: true
    },
    category_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },
    subcategory_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Subcategory",
        required: true
    },
    manufacturer_country: {
        type: String,
        require: true,
    },
    article_number: {
        type: String,
        required: true
    },
    goods: {
        type: [goodSchema],
        required: true,
    },
    drying_time: {
        type: String,
        required: true,
    },
    odorless: {
        type: Boolean,
        required: true,
    },
    product_base: {
        type: String,
        required: true,
    },
    expense: {
        type: String,
        required: true,
    },
    application_tool: {
        type: Array,
        required: true,
    },
    use_types: {
        type: Array,
        required: true,
    },
    used_for_materials: {
        type: Array,
        required: true,
    },
    textured: {
        type: Boolean,
        required: true,
    },
    washing: {
        type: Boolean,
        required: true,
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


module.exports = mongoose.model('Product', Product);

