import { ErrorRequestHandler } from 'express';

const errorHandlerMiddleWare: ErrorRequestHandler = (err, req, res, next) => {
  console.log(err);
  return res.status(500).json({ msg: 'Something went wrong' });
};

export { errorHandlerMiddleWare };
