import express from 'express';
const router = express.Router();

import CursoController from '../controllers/CursoController.js';

router.post('/', CursoController.CursoCreate);
router.get('/', CursoController.CursoList);
router.get('/:id', CursoController.CursoListId);
router.put('/:id', CursoController.CursoUpdate);
router.delete('/:id', CursoController.CursoDelete);

export default router;
