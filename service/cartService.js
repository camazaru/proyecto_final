import {cartDao} from "../dao/cartDao.js"

const getCart = async({userId}) =>{
    const data = await cartDao.getCart({username:userId})

    return data
}

const getCartUserId = async({userId , productId}) =>{
    const data = await cartDao.getCartUserId({username:userId, product:productId})

    return data
}

const updateCartId = async({userId, productId}) =>{
    const data = await cartDao.updateCartId({username:userId, product:productId})

    return data
}

const createCart = async(req) =>{
    const data = await cartDao.createCart(req)

    return data
}

const getCartByFilters = async (filters) => {
    const data = await Cart.find(filters).lean();
  
    return data
  };

  const deleteCart = async (productId) => {
    if (typeof productId !== "string") throw "Product ID must be string";
  
    await productDao.deleteProduct(productId);
  };


  const updateCart = async (userId, product) => {
  
    const updatedCart = await cartDao.updateCart(
        userId, product
    );
  
    return updatedCart;
  };



export const cartService = {
    getCartUserId,
    updateCartId,
    getCart,
    createCart,
    getCartByFilters,
    deleteCart,
    updateCart
}

  