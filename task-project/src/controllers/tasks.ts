import { Request, Response } from 'express';

const getAllTasks = (req: Request, res: Response) => {
  res.send('all items from the file');
};
const createTasks = (req: Request, res: Response) => {
  res.send('creating tasks');
};
const getTasks = (req: Request, res: Response) => {
  res.send('getting');
};
const updateTasks = (req: Request, res: Response) => {
  res.send('updating');
};
const deleteTasks = (req: Request, res: Response) => {
  res.send('deleting');
};

export { getAllTasks, createTasks, getTasks, updateTasks, deleteTasks };
