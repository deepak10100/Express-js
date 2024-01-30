
import express from 'express'
import { createUser, getUser, loginUser } from '../controller/userController.js'
import { isAuth } from '../middlewares/auth.js'
const router = express.Router()


router.post('/create', createUser)
router.post('/login', loginUser)
router.get('/alluser',isAuth, getUser)

export default router