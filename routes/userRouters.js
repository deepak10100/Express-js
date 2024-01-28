import expres from 'express'
import { allUsers, createUser, deleteUser, updateUser } from '../controllers/userController.js'
const router = expres.Router()

router.post('/user/createuser', createUser)
router.get('/user/allusers', allUsers)
router.put('/user/updateuser/:id', updateUser)
router.delete('/user/deleteuser/:id', deleteUser)

export default router