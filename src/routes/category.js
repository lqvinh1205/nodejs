import { Router } from "express";
import { isAdmin, isAuth, requireSignin } from "../controllers/auth";
import { create, list, read, remove, update } from "../controllers/category";
import { userById } from "../controllers/users";

const route = Router();

route.get("/category", list)
route.get("/category/:id", read)
route.post("/category/:userId", requireSignin, isAuth, isAdmin, create)
route.put("/category/:id/:userId/edit", requireSignin, isAuth, isAdmin, update)
route.delete("/category/:id/:userId", requireSignin, isAuth, isAdmin, remove)

route.param("userId", userById)

export default route