import { Router } from "express";
import {productController} from "../controller/indexController.js";
import roleChecker from "../libs/roleChecker.js";

const productRoute  = Router();

productRoute
  .route("/")
  .get(productController.getAllProducts)
  .post(roleChecker.checkIfUserIsAdmin, productController.createProduct);
 
  productRoute
  .route("/:id")
  .get(productController.getOneProduct)
  .put(roleChecker.checkIfUserIsAdmin, productController.updateProduct)
  .delete(roleChecker.checkIfUserIsAdmin, productController.deleteProduct);

  productRoute
  .route("/:category")
  .get(productController.getProductByCategory)



export default productRoute;
