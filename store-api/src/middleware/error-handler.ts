import { ErrorRequestHandler } from 'express';

const errorHandlerMiddleWare: ErrorRequestHandler = (err, req, res) => {
  console.log(err);
  return res.status(500).json({ msg: err.message });
};

export { errorHandlerMiddleWare };
