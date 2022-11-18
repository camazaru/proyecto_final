import { Router } from "express";
import {indexController} from "../controller/indexController.js";
import roleChecker from "../libs/roleChecker.js";

const productRoute  = Router();

productRoute
  .route("/")
  .get(indexController.productController.getAllProducts)
  .post(roleChecker.checkIfUserIsAdmin, indexController.productController.createProduct);
 
  productRoute
  .route("/:id")
  .get(indexController.productController.getOneProduct)
  .put(roleChecker.checkIfUserIsAdmin, indexController.productController.updateProduct)
  .delete(roleChecker.checkIfUserIsAdmin, indexController.productController.deleteProduct);

  productRoute
  .route("/:category")
  .get(indexController.productController.getProductByCategory)



export default productRoute;
