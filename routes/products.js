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
router.get("/product/:id", checkAuth,(req, res,) => {
    res.json(products.find(item => item.id === +req.params.id));
})
router.post("/products", checkAuth, (req, res) => {
    const product = req.body;
    res.json(product)
})
router.delete("/product/:id", checkAuth, (req, res) => {
    res.json(products.filter(item => item.id !== +req.params.id))
})
router.put("/product/:id", checkAuth, (req, res) => {
    res.json(products.map(item => item.id === +req.params.id ? req.body : item))
})
export default router;