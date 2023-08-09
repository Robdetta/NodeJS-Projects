"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskDB = void 0;
const mongoose_1 = require("mongoose");
require("dotenv/config");
//create a schema corresponding to the document interface
const TaskSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    completed: { type: Boolean, required: true },
});
//create a model
const TaskDB = (0, mongoose_1.model)('Task', TaskSchema);
exports.TaskDB = TaskDB;
