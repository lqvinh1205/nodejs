import { Router } from "express";
import { isAdmin, isAuth, requireSignin } from "../controllers/auth";
import { create, list, rangePrice, read, remove, textSearch, update } from "../controllers/products";
import { userById } from "../controllers/users";
import { checkAuth } from "../middlewares/checkAuth";

const router = Router();

router.get("/products", list)
router.get("/products/:id", read)
router.post("/products/:userId", requireSignin, isAuth, isAdmin, create)
router.delete("/products/:id/:userId", requireSignin, isAuth, isAdmin, remove)
router.put("/products/:id/:userId/edit", requireSignin, isAuth, isAdmin, update)
router.post("/products_search?:value", textSearch)
router.post("/products_pricerange", rangePrice)

router.param("userId", userById)
export default router;