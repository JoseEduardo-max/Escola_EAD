const express = require('express');
const router = express.Router();
const CertificadoController = require('../controllers/certificadoController');

router.post('/', CertificadoController.CertificadoCreate);
router.get('/', CertificadoController.CertificadoList);
router.get('/:id', CertificadoController.CertificadoListId);
router.put('/:id', CertificadoController.CertificadoUpdate);
router.delete('/:id', CertificadoController.CertificadoDelete);

module.exports = router;
