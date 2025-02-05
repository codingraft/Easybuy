import express from "express";
import { deleteUser, getAllUser, getUser, newUser, } from "../controllers/user.js";
import { isAdmin } from "../middlewares/auth.js";
const router = express.Router();
router.post("/new", newUser); // route - /api/v1/user/new
router.get("/all", isAdmin, getAllUser); // route - /api/v1/user/all
router.route("/:id").get(getUser).delete(isAdmin, deleteUser); // route - /api/v1/user/dynamicID
export default router;
