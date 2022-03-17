import { Router } from "express";
import { create, list, read } from "../controllers/category";

const route = Router();

route.post("/categorys", create)
route.get("/categorys", list)
route.get("/category/:id", read)


export default route