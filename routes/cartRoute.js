import { Router } from "express";
import {indexController} from "../controller/indexController.js";
import jwt from "../utils/jwt.js"

const cartRoute = Router();

cartRoute
  .route("/")
  .post(indexController.cartController.updateCart);
  cartRoute.get("/:idusuario", indexController.cartController.getCartUserId);
  cartRoute.get("/:idusuario/:idproduct", indexController.cartController.getOneProductCart);
  cartRoute.delete("/:idusuario/:idproduct", indexController.cartController.deleteProductCart);
  


export default cartRoute;
