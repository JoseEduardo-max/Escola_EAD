const express = require("express");
const router = express.Router();
const certificadoController = require("../controllers/certificadoController");

router.get("/allCertificate", certificadoController.getAll);
router.get("/certificate/:id", certificadoController.getById);
router.post("/createCertificate", certificadoController.create);
router.put("/editCertificate/:id", certificadoController.update);
router.delete("/deleteCertificate/:id", certificadoController.remove);

module.exports = router;
