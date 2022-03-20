import { Router } from 'express'
import { create, list, read } from '../controllers/category';

const route = Router();

route.get("/categories", list)
route.get("/categories/:slug", read)
route.post("/categories", create)

export default route