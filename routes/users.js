const createUser= require('../controllers/users')

const express = require('express')
const router = express.Router()
router.post('/user/create',createUser)

module.exports=router