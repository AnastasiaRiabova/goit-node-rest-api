import express from "express";
import { isAuth } from "../helpers/isAuth.js";
import { updateUser } from "../controllers/userControllers.js";
import { uploadMiddleware } from "../helpers/upload.js";

const userRouter = express.Router();

userRouter.patch("/", isAuth, uploadMiddleware.single("avatar"), updateUser);

export default userRouter;
