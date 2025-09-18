const express = require('express')
const router = express.Router()
const UsersController = require('../controllers/usuarioController')

router.post('/', UsersController.UsersCreate)
router.get('/', UsersController.UsersList)
router.get('/:id',UsersController.UsersListId)
router.put('/:id', UsersController.UserUpdate)
router.delete('/:id', UsersController.UserDelete)


module.exports=router