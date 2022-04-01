import { Router } from "express";
import { create, list, read, remove, update } from "../controllers/category";
import { userById } from "../controllers/users";

const route = Router();

route.post("/category/:userId", create)
route.put("/category/:id/:userId/edit", update)
route.delete("/category/:id/:userId", remove)
route.get("/category/:userId", list)
route.get("/category/:id/:userId", read)

route.param("userId", userById)

export default route