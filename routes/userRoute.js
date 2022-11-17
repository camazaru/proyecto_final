import { Router } from "express";
import {userController} from "../controller/indexController.js";

const userRoute = Router();

userRoute
    .route("/")
    .post(userController.createUser)

    userRoute
    .route("/:id")
    .get(userController.getOneUser)


    userRoute
    .route("/login") 
    .post(userController.login)
    

export default userRoute;

