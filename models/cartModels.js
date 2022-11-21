import { Schema, model } from "mongoose";
 
const cartSchema = new Schema({
    userId: { type: String, required: true },
    products: { type: String },
});

const cartModel = model("cart", cartSchema);


export const Cart = cartModel;

