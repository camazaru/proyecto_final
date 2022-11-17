import { Router } from "express";
//import {orderController} from "../controller/indexController.js";
import jwt from "../utils/jwt.js"

const orderRoute  = Router();

orderRoute
  .route("/")
  .post(orderController.createOrder);
 
  orderRoute
  .route("/:id")
  .get(orderController.orderData)


export default orderRoute;
