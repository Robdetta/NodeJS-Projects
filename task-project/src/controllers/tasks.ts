import { Request, Response } from 'express';

const getAllTasks = (req: Request, res: Response) => {
  res.send('all items from the file');
};

export { getAllTasks };
