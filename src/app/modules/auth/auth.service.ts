import config from "../../config";
import { TUser } from "./auth.interface";
import { userModel } from "./auth.model";
import { createToken } from "./auth.utils";

const createUserIntoDb = async (payload:TUser)=>{
    const result = await userModel.create(payload);
    return result
}

const loginUser = async (payload:any)=>{
 const isUserExist = await userModel.findOne({email: payload.email});
 if(!isUserExist) {
    throw new Error('User does not exist');
 }
 const isUserDeleted = isUserExist?.isDeleted;
 if (isUserDeleted) {
    throw new Error('User is deleted');
 }
 const isPasswordMatched = await userModel.isPasswordMatched(
    payload?.password,
    isUserExist?.password || ''
 )
 if (!isPasswordMatched) {
    throw new Error('Password is incorrect');
 }
 const jwtPayload = {
    role: isUserExist.role,
    email: isUserExist.email,
    _id: isUserExist._id,
    name: isUserExist.name
 };
 const accessToken = createToken(
    jwtPayload,
    config.jwt_access_token as string,
    config.jwt_Expires_in as string
 );
 return {
    accessToken
 }
}





export const AuthService = {
    createUserIntoDb,
    loginUser
}