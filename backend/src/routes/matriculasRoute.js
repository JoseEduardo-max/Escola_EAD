import express from 'express';
const router = express.Router();

import MatriculaController from '../controllers/matriculasController.js';

router.post('/', MatriculaController.MatriculaCreate);
router.get('/', MatriculaController.MatriculaList);
router.get('/:id', MatriculaController.MatriculaListId);
router.put('/:id', MatriculaController.MatriculaUpdate);
router.delete('/:id', MatriculaController.MatriculaDelete);

export default router;
