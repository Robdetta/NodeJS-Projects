"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskDB = void 0;
const mongoose_1 = require("mongoose");
require("dotenv/config");
//create a schema corresponding to the document interface
const TaskSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, 'must provide a name'],
        trim: true,
        maxlength: [20, 'name can not be more than 20 characters'],
    },
    completed: {
        type: Boolean,
        default: false,
    },
});
//create a model
const TaskDB = (0, mongoose_1.model)('Task', TaskSchema);
exports.TaskDB = TaskDB;
