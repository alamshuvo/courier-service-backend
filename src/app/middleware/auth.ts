import { NextFunction, Request, Response } from 'express';
import AppError from '../error/AppError';
import { StatusCodes } from 'http-status-codes';
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../config';
import { userModel } from '../modules/auth/auth.model';
import { catchAsync } from '../utils/catchAsync';
import { TRoleEnum } from '../modules/auth/auth.interface';

const auth = (...requiredRole: TRoleEnum[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1];
    // console.log(token,"auth tekhe");
    if (!token) {
      throw new AppError(StatusCodes.UNAUTHORIZED, 'you are not authorized');
    }
    jwt.verify(token,(config.jwt_access_token as string),async  (err, decode)=> {
        if (err) {
          throw new AppError(
            StatusCodes.UNAUTHORIZED,
            'you are not authorized',
          );
          
        }
        
        const { email, role } = decode as JwtPayload;

        // checking the user is exist
        const user = await userModel.findOne({ email: email });

        if (!user) {
          throw new AppError(
            StatusCodes.UNAUTHORIZED,
            'This user is not found !!',
          );
        }
        const isDeleted = user?.isDeleted;
        if (isDeleted) {
          throw new AppError(StatusCodes.UNAUTHORIZED, 'This user is deleted');
        }

        if (requiredRole && !requiredRole.includes(role)) {
          throw new AppError(
            StatusCodes.UNAUTHORIZED,
            'you are not authorized',
          );
        }
        req.user = decode as JwtPayload;

        next();
      },
    );
  });
};

export default auth;
