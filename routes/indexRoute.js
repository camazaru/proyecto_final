import { Router } from "express";
import accessRoute from "./accessRoute.js"
//import cartRoute from "./cartRoute.js"
//import chatRoute from "./chatRoute.js"
//import orderRoute from "./orderRoute.js"
import productRoute from "./productRoute.js";
//import registerRoute from "./registerRoute.js"
import userRoute from "./userRoute.js"
//import cartRoute from "./cartRoutes.js";
import checkAuthentication from "../Strategy/CheckAuth.js";

const router = Router()

//router.use("/",rootRoute);
router.use("/user",userRoute);
router.use("/product", productRoute )
router.use("/product/category", productRoute )
//router.use("/cart", cartRoute);
//router.use("/order", orderRoute);
router.use("/login", accessRoute);
//router.use("/register",registerRoute);
//router.use("/chat", chatRoute);


export default router;

