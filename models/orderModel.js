import { Schema, model } from "mongoose";
 
const orderSchema = new Schema({
    userId: { type: String, required: true },
    products: { type: String, required: true },
    creationDate: { type : Date, default: Date.now },
    status: { type: String, required: true, default: 'generated' }
});

const orderModel = model("order", orderSchema);


export const order = orderModel;
