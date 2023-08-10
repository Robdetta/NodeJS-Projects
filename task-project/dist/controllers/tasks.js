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
const getAllTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tasks = yield task_1.TaskDB.find({});
        res.status(200).json({ tasks });
    }
    catch (error) {
        res.status(500).json({ msg: error });
    }
    res.send('get all tasking');
});
exports.getAllTasks = getAllTasks;
const createTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const task = yield task_1.TaskDB.create(req.body);
        res.status(201).json({ task });
    }
    catch (error) {
        res.status(500).json({ msg: error });
    }
});
exports.createTasks = createTasks;
const getTasks = (req, res) => {
    res.send({ id: req.params.id });
};
exports.getTasks = getTasks;
const updateTasks = (req, res) => {
    res.send('updating');
};
exports.updateTasks = updateTasks;
const deleteTasks = (req, res) => {
    res.send('deleting');
};
exports.deleteTasks = deleteTasks;
