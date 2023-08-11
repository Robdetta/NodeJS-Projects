/* eslint-disable @typescript-eslint/no-var-requires */
'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.router = void 0;
const express_1 = __importDefault(require('express'));
const router = express_1.default.Router();
exports.router = router;
// eslint-disable-next-line @typescript-eslint/no-var-requires
const tasks_1 = require('../controllers/tasks');
router.route('/').get(tasks_1.getAllTasks).post(tasks_1.createTasks);
router
  .route('/:id')
  .get(tasks_1.getTasks)
  .patch(tasks_1.updateTasks)
  .delete(tasks_1.deleteTasks);
