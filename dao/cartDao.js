import {Cart} from '../models/cartModels.js'

const createCart = async (req) => {
  const data = await Cart.create(req);
  return data;
};


const getCart = async({userId, productId}) =>{
    const data = await Cart.find({ userId: userId},{ products: 1, _id: 0 })  
    return data
}

const getCartUserId = async (req) => {
  const userId = req.userId
  const ProductExist = await Cart.find({ userId: userId})

  return ProductExist
}


const updateCartId = async (req) => {
  const userId = req.userId
  const products = req.products
  const updateProductsCart = await Cart.updateOne({ userId: userId},{ $set: { products : products }})

  return updateProductsCart

}

export const cartDao = {
    getCartUserId,
    updateCartId,
    getCart,
    createCart
  }

