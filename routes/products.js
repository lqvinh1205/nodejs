import { Router } from "express";
import { checkAuth } from "../middlewares/checkAuth";

const router = Router();
const products = [
    {id: 1, name: "San pham A"},
    {id: 2, name: "San pham B"},
    {id: 3, name: "San pham C"},
]
router.get("/products", checkAuth,(req, res,) => {
    res.json(products);
})
export default router;