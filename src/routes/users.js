import { Router } from "express";
import { isAdmin, isAuth, requireSignin } from "../controllers/auth";
import { create, list, read, remove, update, userById } from "../controllers/users";
import { checkAuth } from "../middlewares/checkAuth";

const router = new Router();

router.get("/users", list)
router.get("/users/:id", read)
router.delete("/users/:id/:userId", requireSignin,isAuth, isAdmin, remove)
router.post("/users/:userId", requireSignin, isAuth, isAdmin, create)
router.patch("/users/:id/:userId", requireSignin, isAuth, isAdmin, update)

router.param('userId', userById)
export default router