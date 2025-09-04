const express = require('express');
const router = express.Router();
const CursoController = require('../controllers/CursoController');

router.post('/', CursoController.CursoCreate)
router.get('/', CursoController.CursoList)
router.get('/:id',CursoController.CursoListId)
router.put('/:id', CursoController.CursoUpdate)
router.delete('/:id', CursoController.CursoDelete)


module.exports=router