import { Router } from "express";
import { signin, signup } from "../controllers/auth";
const route = Router();

route.post("/signin", signin)
route.post("/signup", signup)
export default route
