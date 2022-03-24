import { Router } from "express";
import { create, list, read, remove, update } from "../controllers/products";
import { checkAuth } from "../middlewares/checkAuth";

const router = Router();

router.get("/products", checkAuth, list)
router.get("/products/:id", checkAuth, read)
router.post("/products", checkAuth, create)
router.delete("/products/:id", checkAuth, remove)
router.put("/products/:id", checkAuth, update)

export default router;