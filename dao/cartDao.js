import {Cart} from '../models/cartModels.js'

const createCart = async (req) => {
  const data = await Cart.create(req);
  return data;
};


const getCart = async({userId}) =>{
    const data = await Cart.find({ userId: userId})  
    return data
}

const getCartUserId = async (req) => {
  const userId = req.userId
  const ProductExist = await Cart.find({ userId: userId})

  return ProductExist
}


const UpdateCartProductByFilters = async (req) => {
  const userId = req.userId
  const product = req.product
  const updateProductsCart = await Cart.updateOne({ userId: userId},{ $set: { product : product }})

  return updateProductsCart

}





export const cartDao = {
    getCartUserId,
    getCart,
    createCart,
    UpdateCartProductByFilters
  }

