import express from 'express';
const router = express.Router();

import UsersController from '../controllers/usuarioController.js';

router.post('/', UsersController.UsersCreate);
router.get('/', UsersController.UsersList);
router.get('/:id', UsersController.UsersListId);
router.put('/:id', UsersController.UserUpdate);
router.delete('/:id', UsersController.UserDelete);

export default router;
