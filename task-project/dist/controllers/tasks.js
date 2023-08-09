"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTasks = exports.updateTasks = exports.getTasks = exports.createTasks = exports.getAllTasks = void 0;
const getAllTasks = (req, res) => {
    res.send('all items from the file');
};
exports.getAllTasks = getAllTasks;
const createTasks = (req, res) => {
    res.send('creating tasks');
};
exports.createTasks = createTasks;
const getTasks = (req, res) => {
    res.send('getting');
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
