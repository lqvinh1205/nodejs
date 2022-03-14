// export const products = [
//     {id: 1, name: "San pham A"},
//     {id: 2, name: "San pham B"},
//     {id: 3, name: "San pham C"},
// ]

import mongoose from "mongoose";

//1. Khoi tao modal
const Product = mongoose.model("Product", {name: String})

export const list = async (req, res,) => {
    try {
        const products = await Product.find()
        res.json(products);
    } catch (error) {
        res.status(400).json({
            messages: "Khong tim thay san pham"
        })
    }
}
export const read = (req, res,) => {
    res.json(products.find(item => item.id === +req.params.id));
}
export const create = async (req, res) => {
    try {
        const product = await new Product(req.body).save();
        res.json(product)
    } catch (error) {
        res.status(400).json({
            messages: "Khong the them san pham",
        })
    }
}
export const remove = (req, res) => {
    res.json(products.filter(item => item.id !== +req.params.id))
}
export const update = (req, res) => {
    res.json(products.map(item => item.id === +req.params.id ? req.body : item))
}