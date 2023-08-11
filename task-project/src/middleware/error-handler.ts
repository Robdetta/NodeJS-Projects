import { ErrorRequestHandler } from 'express';
import { CustomAPIError } from '../errors/custom-error';

const errorHandlerMiddleware: ErrorRequestHandler = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  return res.status(500).json({ msg: 'something went wrong' }); // Using err.message to get the error message
};

export { errorHandlerMiddleware };
