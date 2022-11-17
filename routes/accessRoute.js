import { Router } from "express";
import {accessController} from "../controller/indexController.js";
import passport from 'passport';

const accessRoute  = Router();

accessRoute
.route("/")
.post(passport.authenticate("login", { failureRedirect: '/login', failureMessage:{message:"error al loguear"} }),accessController.postLogin)
.get(accessController.getLogin)

export default accessRoute;





