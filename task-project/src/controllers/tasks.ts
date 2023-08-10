import { Request, Response } from 'express';
import { TaskDB } from '../models/task';

const getAllTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await TaskDB.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const createTasks = async (req: Request, res: Response) => {
  try {
    const task = await TaskDB.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const getTasks = async (req: Request, res: Response) => {
  try {
    const { id: taskID } = req.params;
    const task = await TaskDB.findOne({ _id: taskID });
    if (!task) {
      return res.status(404).json({ msg: `No task with id: : ${taskID}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const updateTasks = (req: Request, res: Response) => {
  res.send('updating');
};
const deleteTasks = (req: Request, res: Response) => {
  res.send('deleting');
};

export { getAllTasks, createTasks, getTasks, updateTasks, deleteTasks };
