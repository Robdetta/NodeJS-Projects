"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsDB = void 0;
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, 'product name must be provided'],
    },
    price: {
        type: Number,
        required: [true, 'product price must be provided'],
    },
    featured: {
        type: Boolean,
        default: false,
    },
    rating: {
        type: Number,
        default: 4.5,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    company: {
        type: String,
        enum: {
            values: ['ikea', 'liddy', 'caressa', 'marcos'],
            message: '{VALUE} is not supported',
        },
        //enum: ['ikea', 'liddy', 'caressa', 'marcos'],
    },
});
const productsDB = (0, mongoose_1.model)('Product', productSchema);
exports.productsDB = productsDB;
