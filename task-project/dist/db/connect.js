"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
require("dotenv/config");
mongoose_1.default.set('useNewUrlParser', true);
mongoose_1.default.set('useUnifiedTopology', true);
const connectDB = (url) => {
    return mongoose_1.default.connect(url).then(() => console.log('Connected to the DB'));
};
exports.connectDB = connectDB;
