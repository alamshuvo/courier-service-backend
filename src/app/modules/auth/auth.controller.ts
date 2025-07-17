import { StatusCodes } from "http-status-codes";
import { catchAsync } from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AuthService } from "./auth.service";

const createUser = catchAsync(async (req, res) => {
    const payload = req.body;
    console.log(payload);
    const result = await AuthService.createUserIntoDb(payload);
    console.log(result);
    sendResponse(res, {
      sucess: true,
      message: 'User registered successflly',
      statusCode: StatusCodes.CREATED,
      data: {
        _id: result._id,
        name: result.name,
        email: result.email,
      },
    });
  });


  export const authController ={
    createUser
  }