import { Router } from "express";
import {indexController} from "../controller/indexController.js";
import {multerConfig} from '../MulterFiles/MulterConfig.js';
import passport from 'passport';

const registerRoute = Router();

registerRoute
.route("/")
.post(multerConfig.loadAvatar().single('avatar'), passport.authenticate("register", { failureRedirect: "/register",failureMessage:{message:"error al registrar"} }),indexController.accessController.postLogin)
.get(indexController.accessController.getRegister)


export default registerRoute;

