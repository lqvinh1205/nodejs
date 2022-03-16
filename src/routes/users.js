import { Router } from "express";
import { create, list, read, remove, update } from "../controllers/users";
import { checkAuth } from "../middlewares/checkAuth";

const router = new Router();

router.get("/users", checkAuth, list)
router.get("/user/:id", checkAuth, read)
router.delete("/user/:id", checkAuth, remove)
router.post("/users", checkAuth, create)
router.put("/user/:id", checkAuth, update)

export default router