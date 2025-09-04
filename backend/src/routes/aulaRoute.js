const express = require('express');
const router = express.Router();
const AulasController = require('../controllers/aulaController');

router.post('/', AulasController.AulasCreate);
router.get('/', AulasController.AulasList);
router.get('/:id', AulasController.AulasListId);
router.put('/:id', AulasController.AulasUpdate);
router.delete('/:id', AulasController.AulasDelete);

module.exports = router;
