const express = require('express');
const router = express.Router();
const ModuloController = require('../controllers/moduloController');

router.post('/', ModuloController.ModuloCreate);
router.get('/', ModuloController.ModuloList);
router.get('/:id', ModuloController.ModuloListId);
router.put('/:id', ModuloController.ModuloUpdate);
router.delete('/:id', ModuloController.ModuloDelete);

module.exports = router;
