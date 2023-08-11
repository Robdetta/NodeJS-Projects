"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandlerMiddleWare = void 0;
const errorHandlerMiddleWare = (err, req, res, next) => {
    console.log(err);
    return res.status(500).json({ msg: 'Something went wrong' });
};
exports.errorHandlerMiddleWare = errorHandlerMiddleWare;
