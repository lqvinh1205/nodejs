import mongoose from "mongoose"

const Post = mongoose.model("Post", {
    title: String,
    description: String,

})
export const list = async(req, res) => {
    try {
        const products = await Post.find()
        res.json(products)
    } catch (error) {
        res.status(400).json({
            messages: "Khong tim thay list post"
        })
    }
}
export const read = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        res.json(post)
    } catch (error) {
        res.status(400).json({
            messages: "Khong tim thay post"
        })
    }
}
export const create = async (req, res) => {
    try {
        const post = await Post.create(req.body)
        res.json(post)
    } catch (error) {
        res.status(400).json({
            messages: "Khong the them post"
        })
    }
}
export const remove = async (req, res) => {
    try {
        const post = await Post.findByIdAndRemove(req.params.id)
        res.json(post)
    } catch (error) {
        res.status(400).json({
            messages: "Khong the xoa post"
        })
    }
}
export const update = async (req, res) => {
    try {
        const post = await Post.findByIdAndUpdate(req.params.id, req.body)
        res.json(post)
    } catch (error) {
        res.status(400).json({
            messages: "Khong the update"
        })
    }
}