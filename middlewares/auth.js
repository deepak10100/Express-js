import jwt from 'jsonwebtoken'
import { Signup } from '../models/userModels.js';
export const isAuth = async (req, res, next) => {
    const { token } = req.cookies
    if (!token) {
       return res.json({
            success: false,
            message: "login first"
        })
    } 
        var decoded = jwt.verify(token, 'qwertyuiop');
        req.signup = await Signup.findById(decoded._id)
        next()
}