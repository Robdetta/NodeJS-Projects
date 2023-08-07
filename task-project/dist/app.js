'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const express_1 = __importDefault(require('express'));
const tasks_1 = __importDefault(require('./routes/tasks'));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json({ type: 'application/*+json' }));
app.use('/todos', tasks_1.default);
// app.get('/', (req, res) => {
//   res.send('Task Project 2');
// });
app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});
app.listen(port);
