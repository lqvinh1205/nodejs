import Category from "../modals/category";
import slugify from "slugify";
import Products from "../modals/products";


export const create = async (req, res) => {
    req.body.slug = slugify(req.body.name)
    try {
        const category = await new Category(req.body).save()
        res.json(category)
    } catch (error) {
        res.status(400).json({
            error
        })
    }
}

export const list = async (req, res) => {
    try {
        const categories = await Category.find().exec()
        res.json(categories)
    } catch (error) {
        res.status(400).json({
            error
        })
    }
}

export const read = async (req, res) => {
    const filter = { slug: req.params.slug }
    try {
        const categories = await Category.findOne(filter).select("_id").exec()
        const products = await Products.find({category: categories._id})
        res.json({
            categories,
            products
        })
    } catch (error) {
        res.status(400).json({
            error
        })
    }
}