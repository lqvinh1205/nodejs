import Product from "../modals/products"
import slugify from "slugify";

export const create = async (req, res) => {
    req.body.slug = slugify(req.body.name)
    try {
        const product = await new Product(req.body).save();
        res.json(product)
    } catch (error) {
        res.status(400).json({
            error: "Khong them duoc san pham"
        })
    }
}

export const list = async (req, res) => {
    try {
        const products = await Product.find().exec();
        res.json(products)
    } catch (error) {
        res.status(400).json({
            error: "Khong tim duoc san pham"
        })
    }
}

export const read = async (req, res) => {
    const filter = req.params.id
    console.log(filter);
    try {
        const product = await Product.findById(filter).exec()
        res.json(product)
    } catch (error) {
        res.status(400).json({
            error: "Khong tim duoc san pham"
        })
    }
}
export const remove = async (req, res) => {
    const filter = req.params.id
    try {
        const product = await Product.findByIdAndRemove(filter).exec()
        res.json(product)
    } catch (error) {
        res.status(400).json({
            error: "Khong xoa duoc san pham"
        })
    }
}

export const update = async (req, res) => {
    const filter = { slug: req.params.slug}
    req.body.slug = slugify(req.body.name)
    console.log(filter);
    try {
        const product = await Product.findOneAndUpdate(filter, req.body, { new : true}).exec()
        res.json(product)
    } catch (error) {
        res.status(400).json({
            error: "Khong update duoc san pham"
        })
    }
}