import { Signup } from "../models/userModels.js"

import jwt from 'jsonwebtoken'

export const createUser =async (req, res) => {
    let{name,email,password,cpassword}= req.body
    let signup =await Signup.findOne({email})
    if (signup) {
        res.json({
            success:false,
            message:"user allready exits"
        })
    }
   else if (password === cpassword) {
        signup = await Signup.create({name,email,password,cpassword})
        var token = jwt.sign({ _id: signup._id }, 'qwertyuiop');
        res.cookie("token",token,{
        httpOnly:true,
        maxAge:1*60*10000
       }).json({
        success:true,
        signup
       }) 
    }
    else{
        return res.json({
            success:false,
            message:"password not match"
        })
    }
}
export const loginUser =async (req, res) => {
    let{email,password}= req.body
    let signup =await Signup.findOne({email})
    if (!signup) {
        res.json({
            success:false,
            message:"you are not register user"
        })
    }
   else if (signup.password === password) {
        var token = jwt.sign({ _id: signup._id }, 'qwertyuiop');
        res.cookie("token",token,{
        httpOnly:true,
        maxAge:1*60*10000
       }).json({
        success:true,
        signup
       }) 
    }
    else{
        return res.json({
            success:false,
            message:"invalid email and passoword"
        })
    }
}
export const getUser =async (req, res) => {
    let signup = await Signup.find({})
    res.json({
        success:true,
        signup
    })
}