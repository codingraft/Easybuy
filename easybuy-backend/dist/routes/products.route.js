import express from "express";
import { isAdmin } from "../middlewares/auth.js";
import { deleteProduct, getAdminsProducts, getAllProducts, getAllProductsCategory, getLatestProducts, getSingleProduct, newProduct, updateProduct, } from "../controllers/product.js";
import { singleUpload } from "../middlewares/multer.js";
const router = express.Router();
router.post("/new", isAdmin, singleUpload, newProduct);
router.get("/all", getAllProducts);
router.get("/latest", getLatestProducts);
router.get("/categories", getAllProductsCategory);
router.get("/admin-products", getAdminsProducts);
router
    .route("/:id")
    .get(getSingleProduct)
    .put(isAdmin, singleUpload, updateProduct)
    .delete(isAdmin, deleteProduct);
export default router;
