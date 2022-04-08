import User from "../modals/users"
import jwt from "jsonwebtoken"
import expressJWT from 'express-jwt'
export const signup = async (req, res) => {
    
    const { name, email, password } = req.body
    try {
        const isUser = await User.findOne({ email }).exec()
        if(isUser) {
            res.json({
                messages: "Tai khoan da ton tai"
            })
        }
        const user = await new User({ name, email, password }).save()
        res.json({
            user: {
                _id: user._id,
                name: user.name,
                email: user.email
            }
        })
    } catch (error) {
        console.log(error);
    }
}
export const signin = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.findOne({email})
        if(!user) {
            return res.json({
                messages: "Tai khoan khong ton tai"
            })
        }      
        if(!user.authticate(password)){
            return res.json({
                messages: "Sai mat khau"
            })
        }
        const token = jwt.sign({ _id: user._id}, "123456", { expiresIn: 60* 60})
        res.json({
            token,
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        })
    } catch (error) {
        console.log(error);
    }
}

export const requireSignin = expressJWT({
    algorithms: ["HS256"],
    secret: "123456",
    requestProperty: "auth"
})

export const isAuth = (req, res, next) => {
    const status = req.profile._id == req.auth._id;
    if(!status) {
        res.status(400).json({
            messages: "Ban khong co quyen truy cap"
        })
    }
    next();
}

export const isAdmin = (req, res , next) => {
    if( req.profile.role == 0) {
        res.status(401).json({
            messages: "Khong phaii admin"
        })
    }
    next()
}