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
exports.deleteTasks = exports.updateTasks = exports.getTasks = exports.createTasks = exports.getAllTasks = void 0;
const task_1 = require("../models/task");
const async_1 = require("../middleware/async");
const custom_error_1 = require("../errors/custom-error");
const getAllTasks = (0, async_1.asyncWrapper)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tasks = yield task_1.TaskDB.find({});
    res.status(200).json({ tasks });
    // res.status(200).json({ tasks });
    //res.status(200).json({ tasks, amount: tasks.length });
}));
exports.getAllTasks = getAllTasks;
const createTasks = (0, async_1.asyncWrapper)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const task = yield task_1.TaskDB.create(req.body);
    res.status(201).json({ task });
}));
exports.createTasks = createTasks;
const getTasks = (0, async_1.asyncWrapper)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id: taskID } = req.params;
    const task = yield task_1.TaskDB.findOne({ _id: taskID });
    if (!task) {
        return next((0, custom_error_1.createCustomError)(`No task with id: : ${taskID}`, 404));
        return res.status(404).json({ msg: `No task with id: : ${taskID}` });
    }
    res.status(200).json({ task });
}));
exports.getTasks = getTasks;
const deleteTasks = (0, async_1.asyncWrapper)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id: taskID } = req.params;
    const task = yield task_1.TaskDB.findOneAndDelete({ _id: taskID });
    if (!task) {
        return next((0, custom_error_1.createCustomError)(`No task with id: : ${taskID}`, 404));
    }
    res.status(200).json({ task });
}));
exports.deleteTasks = deleteTasks;
const updateTasks = (0, async_1.asyncWrapper)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id: taskID } = req.params;
    const task = yield task_1.TaskDB.findOneAndUpdate({ _id: taskID }, req.body, {
        new: true,
        runValidators: true,
    });
    if (!task) {
        return next((0, custom_error_1.createCustomError)(`No task with id: : ${taskID}`, 404));
    }
    res.status(200).json({ task });
}));
exports.updateTasks = updateTasks;
