import { Router } from "express";
import { create, list, remove, update } from "../controllers/detailCart";
import { userById } from "../controllers/users";

const route = Router();

route.get("/detail-cart", list)
route.post("/detail-cart", create)
route.put("/detail-cart/:id/edit", update)
route.delete("/detail-cart/:id", remove)

route.param("userId", userById)

export default route