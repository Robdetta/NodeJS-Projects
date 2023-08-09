import express, { Request, Response } from 'express';
const router = express.Router();
import { getAllTasks } from '../controllers/tasks';

router.route('/').get(getAllTasks);

export { router };
