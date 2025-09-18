import express from 'express';
const router = express.Router();

import CertificadoController from '../controllers/certificadoController.js';

router.post('/', CertificadoController.CertificadoCreate);
router.get('/', CertificadoController.CertificadoList);
router.get('/:id', CertificadoController.CertificadoListId);
router.put('/:id', CertificadoController.CertificadoUpdate);
router.delete('/:id', CertificadoController.CertificadoDelete);

export default router;
