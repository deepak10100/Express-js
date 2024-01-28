import { Signup } from "../models/userModels.js";
import jwt from 'jsonwebtoken'

export const isAuth = async (req, res, next) => {
    const { token } = req.cookies;
    if (!token) {
        return res.json({
            status: false,
            message: 'login first'
        })
    }
    var decoded = jwt.verify(token, process.env.SCREATKEY);
    req.signup = await Signup.findById(decoded._id)
    next()

}