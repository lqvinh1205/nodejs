import { Router } from "express";
import { isAuth, requireSignin } from "../controllers/auth";
import { create, list, read, remove, update, userById } from "../controllers/users";
import { checkAuth } from "../middlewares/checkAuth";

const router = new Router();

router.get("/users", checkAuth, list)
router.get("/user/:id", checkAuth, read)
router.delete("/user/:id", checkAuth, remove)
router.post("/users/:userId", requireSignin, isAuth, create)
router.put("/user/:id", checkAuth, update)

router.param('userId', userById)
export default router