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


export const cartService = {
    getCartUserId,
    updateCartId,
    getCart,
    createCart}

  