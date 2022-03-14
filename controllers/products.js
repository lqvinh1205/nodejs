// export const products = [
//     {id: 1, name: "San pham A"},
//     {id: 2, name: "San pham B"},
//     {id: 3, name: "San pham C"},
// ]

import mongoose from "mongoose";

//1. Khoi tao modal
const Product = mongoose.model("Product", {name: String})

export const list = async (req, res) => {
    try {
        const products = await Product.find()
        res.json(products);
    } catch (error) {
        res.status(400).json({
            messages: "Khong tim thay san pham"
        })
    }
}
export const read = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        res.json(product)
    } catch (error) {
        res.status(400).json({
            messages: "Khong tim thay san pham"
        })
    }
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
export const remove = async (req, res) => {
    try {
        console.log(req.params.id);
        const product = await Product.findByIdAndRemove(req.params.id)
        res.json(product)
    } catch (error) {
        res.status(400).json({
            messages: "Khong the xoa san pham"
        })
    }
    // res.json(products.filter(item => item.id !== +req.params.id))
}
export const update = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body)
        res.json(product)
    } catch (error) {
        res.status(400).json({
            messages: "Khong the cap nhat"
        })
    }
}