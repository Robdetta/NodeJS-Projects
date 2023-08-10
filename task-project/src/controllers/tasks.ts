import { NextFunction, Request, Response } from 'express';
import { TaskDB } from '../models/task';
import { asyncWrapper } from '../middleware/async';
import { createCustomError } from '../errors/custom-error';

const getAllTasks = asyncWrapper(async (req: Request, res: Response) => {
  const tasks = await TaskDB.find({});
  res.status(200).json({ tasks });
  // res.status(200).json({ tasks });
  //res.status(200).json({ tasks, amount: tasks.length });
});

const createTasks = asyncWrapper(async (req: Request, res: Response) => {
  const task = await TaskDB.create(req.body);
  res.status(201).json({ task });
});

const getTasks = asyncWrapper(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id: taskID } = req.params;
    const task = await TaskDB.findOne({ _id: taskID });
    if (!task) {
      return next(createCustomError(`No task with id: : ${taskID}`, 404));
      return res.status(404).json({ msg: `No task with id: : ${taskID}` });
    }
    res.status(200).json({ task });
  },
);

const deleteTasks = asyncWrapper(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id: taskID } = req.params;
    const task = await TaskDB.findOneAndDelete({ _id: taskID });
    if (!task) {
      return next(createCustomError(`No task with id: : ${taskID}`, 404));
    }
    res.status(200).json({ task });
  },
);

const updateTasks = asyncWrapper(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id: taskID } = req.params;
    const task = await TaskDB.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return next(createCustomError(`No task with id: : ${taskID}`, 404));
    }
    res.status(200).json({ task });
  },
);

export { getAllTasks, createTasks, getTasks, updateTasks, deleteTasks };
