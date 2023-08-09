import express from 'express';
const router = express.Router();
import {
  getAllTasks,
  createTasks,
  getTasks,
  updateTasks,
  deleteTasks,
} from '../controllers/tasks';

router.route('/').get(getAllTasks).post(createTasks);
router.route('/:id').get(getTasks).patch(updateTasks).delete(deleteTasks);

export { router };
