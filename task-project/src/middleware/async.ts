import { RequestHandler, Request, Response, NextFunction } from 'express';

const asyncWrapper = (fn: RequestHandler): RequestHandler => {
  return async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      await fn(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};

export { asyncWrapper };
