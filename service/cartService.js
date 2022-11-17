import {cartDao} from "../dao/cartDao.js"

const getCart = async({userId}) =>{
    const data = await cartDao.getCart({userId})

    return data
}

const getCartUserId = async({userId , productId}) =>{
    const data = await cartDao.getCartUserId({userId, productId})

    return data
}

const updateCartId = async({userId, productId}) =>{
    const data = await cartDao.updateCartId({userId, productId})

    return data
}

const createCart = async(req) =>{
    const data = await cartDao.createCart(req)

    return data
}


export const cartService = {
    getCartUserId,
    updateCartId,
    getCart,
    createCart}

  