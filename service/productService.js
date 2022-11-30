import { productDao } from "../dao/productDao.js";

const createProduct = async ({ name, price, thumbnail, category, description, stock }) => {
  const createdProduct = await productDao.createProduct({ name, price, thumbnail, category, description, stock  });

  return createdProduct
};



const getAllProducts = async () => {
  const data = await productDao.getAllProducts();

  return data;
};


const getProductById = async (productId) => {
 const product = await productDao.getProductById(productId);
 
  return product;
};

const getProductByCategory = async (category) => {
  const data = await productDao.getProductByCategory(category);

  return data;
};


const updateProduct = async ({ title, price, stock }, productId) => {
  if (typeof title !== "string") throw "Title must be string";
  if (typeof price !== "number") throw "Price must be number";
  if (typeof stock !== "number") throw "Stock must be number";
  if (typeof productId !== "string") throw "Product ID must be string";

  const updatedProduct = await productDao.updateProduct(
    { title, price, stock },
    productId
  );

  return updatedProduct;
};

const deleteProduct = async (productId) => {

  console.log("que trae", productId)
  if (typeof productId !== "string") throw "Product ID must be string";

  await productDao.deleteProduct(productId);
};

const getOneProduct = async (productId) => {
   const product = await productDao.getProductById(productId);

  return product;
};


export const productService = {
  createProduct,  
  getAllProducts,
  getProductById,
  getProductByCategory,
  updateProduct,
  deleteProduct,
  getOneProduct,
  
    
  };
  
