import User from "../modals/users"

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