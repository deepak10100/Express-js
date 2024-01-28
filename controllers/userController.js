import {Signup} from '../models/userModels.js';
import expres from 'express'
const app = expres()
import bodyParser from 'body-parser'
app.use(bodyParser.urlencoded({ extended: false }))
export const createUser = async (req, res) => {
    let {name,email,pass,cpass} = req.body
    await Signup.create({name,email,pass,cpass})
    res.json({
        status: true,
        message:"singup successfully"
    })

}
export const allUsers = async (req, res) => {
    let singup = await Signup.find()
    res.json({
        status: true,
        singup
    })

}
export const updateUser = async (req, res) => {
    await Signup.findByIdAndUpdate(req.params.id,{$set:req.body})
    res.json({
        status: true,
        message:"Upadate users"
    })

}
export const deleteUser = async (req, res) => {
    await Signup.findByIdAndDelete(req.params.id,req.body)
    res.json({
        status: true,
        message:"Delete users"
    })

}