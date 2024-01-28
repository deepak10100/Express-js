import expres from 'express'
import {createUser, getUser, loginUser, logout, } from '../controllers/userController.js'
import { isAuth } from '../middlewares/auth.js'
const router = expres.Router()

router.post('/user/createuser', createUser)
router.post('/user/loginuser', loginUser)
router.get('/user/logout', logout)
router.get('/user/me',isAuth, getUser)

export default router