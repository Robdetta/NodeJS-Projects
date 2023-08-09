"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const tasks_1 = require("./routes/tasks");
const port = 3000;
app.use(express_1.default.json());
//routes
app.get('/hello', (req, res) => {
    res.send('Something here');
});
app.use('/api/v1/tasks', tasks_1.router);
app.listen(port, () => console.log(`server is listening on ${port}...`));
