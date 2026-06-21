import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";

import {
    addIncome,
    getIncome,
    editIncome,
    removeIncome
} from "../controllers/incomeController.js";

const router = express.Router();

router.post("/", authMiddleware, addIncome);
router.get("/", authMiddleware, getIncome);
router.patch("/:id", authMiddleware, editIncome);
router.delete("/:id", authMiddleware, removeIncome);

export default router;