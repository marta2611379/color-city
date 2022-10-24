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
        type: String,
        required: true
    },
    category_id: {
        type: String,
        required: true
    },
    subcategory_id: {
        type: String,
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
        type: String,
        // type: Array,
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
    description: {
        type: String,
        require: false,
        default: null
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

Product.virtual('category', {
    ref: 'Category',
    localField: 'category_id',
    foreignField: '_id',
    justOne: true
});

Product.virtual('manufacturer', {
    ref: 'Brand',
    localField: 'manufacturer_id',
    foreignField: '_id',
    justOne: true
});

Product.virtual('subcategory', {
    ref: 'Subcategory',
    localField: 'subcategory_id',
    foreignField: '_id',
    justOne: true
});


// tell Mongoose to retreive the virtual fields
Product.set('toObject', { virtuals: true });
Product.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Product', Product);

