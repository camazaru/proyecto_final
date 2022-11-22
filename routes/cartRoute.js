import { Router } from "express";
import {indexController} from "../controller/indexController.js";
import jwt from "../utils/jwt.js"

const cartRoute = Router();

cartRoute
  .route("/")
  .post(indexController.cartController.createCart);
  

cartRoute
  .route("/")
  .get(indexController.cartController.getCart)

  cartRoute
  .route("/:productId")
  .get(indexController.cartController.getCartId)
  


export default cartRoute;
