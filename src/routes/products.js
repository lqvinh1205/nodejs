import { Router } from "express";
import { create, list, read, remove, update } from "../controllers/products";

const route = Router();

route.get("/products", list)
route.get("/products/:id", read)
route.post("/products", create)
route.delete("/products/:id", remove)
route.put("/products/:slug", update)

export default route;