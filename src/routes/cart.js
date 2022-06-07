import { Router } from "express";
import { addItemToCart, getCart, updateCart } from "../controllers/carts";

const route = Router();

route.get("/cart/:userId", getCart)
// route.get("/cart", read)
route.post("/cart", addItemToCart)
route.patch("/cart", updateCart)
// route.delete("/cart/:id", remove)

// route.param("userId", userById)

export default route