import { Router } from "express";
import { authController } from "./auth.controller";
import validateRequest from "../../middleware/validateRequest";
import { authValidation } from "./auth.validation";

const router = Router();
router.post("/register", validateRequest(authValidation.userValidationSchema),authController.createUser)
router.post("/login",validateRequest(authValidation.loginValidationSchema),authController.loginUser)
export const authRoutes = router;