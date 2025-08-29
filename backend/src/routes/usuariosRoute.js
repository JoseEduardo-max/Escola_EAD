const express = require('express')
const router = express.Router()
const UsersController = require('../controllers/usuarioController')



router.post('/', UsersController.UsersCreate)


module.exports=router