import express from 'express';
const router = express.Router();

import AulasController from '../controllers/aulaController.js';

router.post('/', AulasController.AulasCreate);
router.get('/', AulasController.AulasList);
router.get('/:id', AulasController.AulasListId);
router.put('/:id', AulasController.AulasUpdate);
router.delete('/:id', AulasController.AulasDelete);

export default router;
