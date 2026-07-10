import { Router } from "express";
import { loginUser, registerUser,logoutUser } from "../controllers/auth.controller.js";
// Creates a mini version of Express app
// Used only for handling routes
const router = Router();
// Define route for registering user
router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/logout').post(logoutUser);

export default router;

