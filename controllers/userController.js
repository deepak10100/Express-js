import { Signup } from '../models/userModels.js';
import expres from 'express'
const app = expres()
import bodyParser from 'body-parser'
import jwt from 'jsonwebtoken'
app.use(bodyParser.urlencoded({ extended: false }))
export const createUser = async (req, res) => {
    let { name, email, pass, cpass } = req.body
    let signup = await Signup.findOne({ email })
    if (signup) {
        return res.json({
            status: true,
            message: "user allready exits"
        })
    }
    signup = await Signup.create({ name, email, pass, cpass })
    var token = jwt.sign({ _id: signup._id, }, process.env.SCREATKEY);
    res.cookie("token", token, {
        httpOnly: true,
        maxAge: 1 * 60 * 10000
    }).json({
        status: true,
        message: "singup successfully"
    }) 

}
export const loginUser = async (req, res) => {
    let { email, pass } = req.body
    let signup = await Signup.findOne({ email })
    if (!signup) {
       res.json({
            status: true,
            message: "email and password invalid"
        })
    }
   else if (signup.pass==pass) {
        var token = jwt.sign({ _id: signup._id, }, process.env.SCREATKEY);
        res.cookie("token", token, {
            httpOnly: true,
            maxAge: 1 * 60 * 10000
        }).json({
            status: true,
            message: `login successfully ${signup.name}`
        }) 
    }
    

}

export const getUser =  (req, res) => {
    res.json({
        satus:true,
        signup:req.signup
    })
}
export const logout =  (req, res) => {
    res.cookie("token","",{expres:new Date(Date.now())}).json({
        satus:true,
        signup:req.signup
    })
}
