import { Request, Response } from 'express';
import { TaskDB } from '../models/task';

const getAllTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await TaskDB.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
  res.send('get all tasking');
};
const createTasks = async (req: Request, res: Response) => {
  try {
    const task = await TaskDB.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
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
