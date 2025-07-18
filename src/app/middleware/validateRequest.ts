import { NextFunction, Request, Response } from 'express';
import { ZodObject } from 'zod';
import { catchAsync } from '../utils/catchAsync';


const validateRequest = (scehme: ZodObject<any>) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    await scehme.parseAsync({
      body: req.body,
    });
    next();
  });
};
export default validateRequest;
