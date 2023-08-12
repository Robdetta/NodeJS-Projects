"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandlerMiddleWare = void 0;
const errorHandlerMiddleWare = (err, req, res) => {
    console.log(err);
    return res.status(500).json({ msg: err.message });
};
exports.errorHandlerMiddleWare = errorHandlerMiddleWare;
