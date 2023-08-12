"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllProducts = exports.getAllProductsStatic = void 0;
const products_1 = require("../models/products");
const getAllProductsStatic = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const search = 'ab';
    const products = yield products_1.productsDB.find({
        name: { $regex: search, $options: 'i' },
    });
    res.status(200).json({ products, hbHits: products.length });
});
exports.getAllProductsStatic = getAllProductsStatic;
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { featured, company, name } = req.query;
    const queryObject = {};
    if (featured) {
        queryObject.featured = featured === 'true' ? true : false;
    }
    if (company) {
        queryObject.company = company;
    }
    if (name) {
        queryObject.name = { $regex: name, $options: 'i' };
    }
    console.log(queryObject);
    const products = yield products_1.productsDB.find(queryObject);
    res.status(200).json({ products, hbHits: products.length });
});
exports.getAllProducts = getAllProducts;
