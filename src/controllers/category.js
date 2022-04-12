import Cart from "../modals/carts";
import DetailCart from "../modals/detailCart";

export const create = async (req, res) => {
    try {
        const category = await new Cart(req.body).save();
        res.json(category)
    } catch (error) {
        res.status(400).json({error})
    }
}

export const read = async (req, res) => {
    try {
        const category = await Cart.findById(req.params.id).exec();
        const products = await DetailCart.find({category}).exec();
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
        const categorys = await Cart.find().exec();
        res.json(categorys)
    } catch (error) {
        res.status(400).json({error})
    }
}
export const update = async (req, res) => {
    try {
        const categorys = await Cart.findByIdAndUpdate(req.params.id, req.body).exec();
        res.json(categorys)
    } catch (error) {
        res.status(400).json({error})
    }
}
export const remove = async (req, res) => {
    try {
        const categorys = await Cart.findByIdAndRemove(req.params.id).exec();
        res.json(categorys)
    } catch (error) {
        res.status(400).json({error})
    }
}