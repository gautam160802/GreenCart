// routes/cartRoutes.js
import express from "express";
import { updateCart } from "../controllers/cartController.js";
import authUser from "../middlewares/authUser.js";

const router = express.Router();

router.post("/update", authUser, updateCart); // ✅ Middleware attached

export default router;
