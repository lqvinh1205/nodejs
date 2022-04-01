import { Router } from "express";
import { isAdmin, isAuth, requireSignin } from "../controllers/auth";
import { create, list, read, remove, update } from "../controllers/products";
import { userById } from "../controllers/users";
import { checkAuth } from "../middlewares/checkAuth";

const router = Router();

router.get("/products/:userId", checkAuth, list)
router.get("/products/:id/:userId", checkAuth, read)
router.post("/products/:userId", requireSignin, isAuth, isAdmin, create)
router.delete("/products/:id/:userId", checkAuth, remove)
router.put("/products/:id/:userId/edit", update)

router.param("userId", userById)
export default router;