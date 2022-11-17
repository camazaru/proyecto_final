import {Cart} from '../models/cartModels.js'

const createCart = async (cartToCreate) => {
  const createdCart = await Cart.create(cartToCreate);
  return createdCart;
};


const getCart = async({userId, productId}) =>{
    const data = await CartModel.find({ userId: userId},{ products: 1, _id: 0 })  
    return data
}

const getCartUserId = async (req) => {
  const userId = req.userId
  const ProductExist = await CartModel.find({ userId: userId})

  return ProductExist
}


const updateCartId = async (req) => {
  const userId = req.userId
  const products = req.products
  const updateProductsCart = await CartModel.updateOne({ userId: userId},{ $set: { products : products }})

  return updateProductsCart

}

export const cartDao = {
    getCartUserId,
    updateCartId,
    getCart,
    createCart
  }

