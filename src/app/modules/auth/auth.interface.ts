import { Model } from "mongoose";

export type TRoleEnum = 'admin' | 'customer' | 'deliveryAgent';

export type TUser = {
  name: string;
  email: string;
  password: string;
  role: TRoleEnum;
  isDeleted?: {
    type: boolean;
    default: false;
  };
};

export interface UserModel extends Model<TUser>{
    isPasswordMatched(
        plainTextPassword: string,
        hashedPassword:string
    ):Promise<boolean>;
}