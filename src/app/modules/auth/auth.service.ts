import { TUser } from "./auth.interface";
import { userModel } from "./auth.model";

const createUserIntoDb = async (payload:TUser)=>{
    const result = await userModel.create(payload);
    return result
}

export const AuthService = {
    createUserIntoDb
}