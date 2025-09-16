const express = require('express');
const router = express.Router();
const MatriculaController = require('../controllers/matriculasController');

router.post('/', MatriculaController.MatriculaCreate);


router.get('/', MatriculaController.MatriculaList);


router.get('/:id', MatriculaController.MatriculaListId);

router.put('/:id', MatriculaController.MatriculaUpdate);


router.delete('/:id', MatriculaController.MatriculaDelete);

module.exports = router;
