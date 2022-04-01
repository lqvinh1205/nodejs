import { Router } from "express";
import { create, list, read } from "../controllers/category";
import { userById } from "../controllers/users";

const route = Router();

route.post("/category/:userId", create)
route.get("/category/:userId", list)
route.get("/category/:id/:userId", read)

route.param("userId", userById)

export default route