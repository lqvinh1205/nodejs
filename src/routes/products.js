import { Router } from "express";
import { create, list, read } from "../controllers/products";

const route = Router();

route.get("/products", list)
route.get("/products/:id", read)
route.post("/products", create)

export default route;