import users from "../modals/users"
import User from "../modals/users"

export const list = async (req, res) => {
    try {
        const user = await User.find()
        res.json(user)
    } catch (error) {
        res.status(400).json({
            messages: "Khong tim thay user"
        })
    }
}


export const read = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        res.json(user)
    } catch (error) {
        res.status(400).json({
            messages: "Khong tim thay user"
        })
    }
}
export const create = async (req, res) => {
    try {
        const user = await new User(req.body).save();
        res.json(user)
    } catch (error) {
        res.status(400).json({
            messages: "Khong the tao user"
        })
    }
}

export const remove = async (req, res) => {
    try {
        const user = await User.findByIdAndRemove(req.params.id)
        res.json(user)
    } catch (error) {
        res.status(400).json({
            messages: "Khong the xoa user"
        })
    }
}

export const update = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.json(user)
    } catch (error) {
        res.status(400).json({
            messages: "Khong the update"
        })
    }
}


export const userById = async (req, res, next, id) => {
    try {
        console.log(id);
        const user = await User.findById(id).exec();
        if(!user) {
            res.status(400).json({
                messages: "Tai khoan khong ton tai"
            })
        }
        req.profile = user;
        console.log("req.profile", req.profile);
        next()
    } catch (error) {
        console.log(error);        
    }
}