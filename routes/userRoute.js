import { Router } from "express";
import {userController} from "../controller/indexController.js";

const userRoute = Router();

userRoute
    .route("/")
    .get(userController.getUserByMail);
    

export default userRoute;

