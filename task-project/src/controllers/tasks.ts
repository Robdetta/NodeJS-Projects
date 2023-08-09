import { Request, Response } from 'express';
import { TaskDB } from '../models/task';

const getAllTasks = (req: Request, res: Response) => {
  res.send('get all tasking');
};
const createTasks = async (req: Request, res: Response) => {
  const task = await TaskDB.create(req.body);
  res.status(201).json({ task });
};
const getTasks = (req: Request, res: Response) => {
  res.send({ id: req.params.id });
};
const updateTasks = (req: Request, res: Response) => {
  res.send('updating');
};
const deleteTasks = (req: Request, res: Response) => {
  res.send('deleting');
};

export { getAllTasks, createTasks, getTasks, updateTasks, deleteTasks };
