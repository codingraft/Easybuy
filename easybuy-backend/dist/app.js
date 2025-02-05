import express from "express";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import productRouter from "./routes/products.route.js";
import orderRouter from "./routes/order.route.js";
import { connectDB } from "./utils/db.js";
import { errorMiddleware } from "./middlewares/error.js";
import NodeCache from "node-cache";
import morgan from "morgan";
dotenv.config({
    path: './.env'
});
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 4001;
export const cache = new NodeCache();
app.get("/", (_req, res) => {
    res.send("Api working");
});
// using routes
app.use("/api/v1/user", userRouter);
app.use("/api/v1/product", productRouter);
app.use("/api/v1/order", orderRouter);
app.use('/uploads', express.static('uploads'));
app.use(morgan('dev'));
app.use(errorMiddleware);
connectDB();
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
