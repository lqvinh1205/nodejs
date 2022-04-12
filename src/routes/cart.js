import { Router } from "express";
import { isAdmin, isAuth, requireSignin } from "../controllers/auth";
import { create, list, read, remove, update } from "../controllers/category";
import { userById } from "../controllers/users";

const route = Router();

route.get("/cart", list)
route.get("/cart", read)
route.post("/cart", create)
route.put("/cart/:id/edit", update)
route.delete("/cart/:id", remove)

route.param("userId", userById)

export default route