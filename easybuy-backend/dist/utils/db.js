import mongoose from "mongoose";
import { Product } from "../models/products.model.js";
import { cache } from "../app.js";
import { Order } from "../models/order.model.js";
export const connectDB = async () => {
    try {
        if (!process.env.MONGO_URI) {
            throw new Error("MONGO_URI is not defined");
        }
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    }
    catch (error) {
        console.error(`Error: ${error}`);
        process.exit(1);
    }
};
export const invalidateCache = async ({ product, admin, order, userId, orderId, productId }) => {
    if (product) {
        const productKeys = ["latestProducts", "categories", "allProducts, `product-${productId}`"];
        if (typeof productId === "string") {
            productKeys.push(`product-${productId}`);
        }
        if (typeof productId === "object") {
            productId.forEach((id) => {
                productKeys.push(`product-${id}`);
            });
        }
        cache.del(productKeys);
    }
    if (order) {
        const orderKeys = ["allOrders", `myOrders-${userId}`, `singleOrder-${orderId}`];
        const orders = await Order.find({}).select("_id");
        cache.del(orderKeys);
    }
    if (admin) { }
};
export const reduceOrderQuantity = async (orderItems) => {
    for (let i = 0; i < orderItems.length; i++) {
        const order = orderItems[i];
        const product = await Product.findById(order.productId);
        if (!product) {
            throw new Error("Product out of stock");
        }
        product.stock -= order.quantity;
        await product.save();
    }
};
