import { Router } from "express";
import { isAdmin, isAuth, requireSignin } from "../controllers/auth";
import { create, list, read, remove, update } from "../controllers/posts";
import { userById } from "../controllers/users";

const router = Router();

router.get("/posts", list)
router.get("/post/:id", read)
router.post("/posts/:userById", requireSignin, isAuth, isAdmin, create)
router.delete("/post/:id/:userById", requireSignin, isAuth, isAdmin, remove)
router.put("/post/:id/:userById", requireSignin, isAuth, isAdmin, update)

router.param("userId", userById)
 
export default router;