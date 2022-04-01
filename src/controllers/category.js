import Category from "../modals/category";
import Products from "../modals/products";

export const create = async (req, res) => {
    try {
        const category = await new Category(req.body).save();
        res.json(category)
    } catch (error) {
        res.status(400).json({error})
    }
}

export const read = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id).exec();
        const products = await Products.find({category}).exec();
        res.json({
            category,
            products
        })
    } catch (error) {
        res.status(400).json({error})
    }
}
export const list = async (req, res) => {
    try {
        const categorys = await Category.find().exec();
        res.json(categorys)
    } catch (error) {
        res.status(400).json({error})
    }
}
export const update = async (req, res) => {
    try {
        const categorys = await Category.findByIdAndUpdate(req.params.id, req.body).exec();
        res.json(categorys)
    } catch (error) {
        res.status(400).json({error})
    }
}
export const remove = async (req, res) => {
    try {
        const categorys = await Category.findByIdAndRemove(req.params.id).exec();
        res.json(categorys)
    } catch (error) {
        res.status(400).json({error})
    }
}