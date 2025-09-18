import express from 'express';
const router = express.Router();

import ModuloController from '../controllers/moduloController.js';

router.post('/', ModuloController.ModuloCreate);
router.get('/', ModuloController.ModuloList);
router.get('/:id', ModuloController.ModuloListId);
router.put('/:id', ModuloController.ModuloUpdate);
router.delete('/:id', ModuloController.ModuloDelete);

export default router;
