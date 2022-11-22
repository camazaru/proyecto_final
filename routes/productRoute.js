import { Router } from "express";
import {indexController} from "../controller/indexController.js";
import roleChecker from "../libs/roleChecker.js";

const productRoute  = Router();

productRoute
  .route("/")
  .get(indexController.productController.getAllProducts)
  .post(indexController.productController.createProduct);
 
  productRoute
  .route("/:id")
  .get(indexController.productController.getOneProduct)
  .put(indexController.productController.updateProduct)
  .delete(indexController.productController.deleteProduct);

  productRoute
  .route("/:category")
  .get(indexController.productController.getProductByCategory)



export default productRoute;
