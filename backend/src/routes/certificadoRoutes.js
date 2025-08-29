const express = require("express");
const router = express.Router();
const certificadoController = require("../controllers/certificadoController");

router.get("/certificate", certificadoController.getAll); 
router.get("/certificate/:id", certificadoController.getById);
router.post("/certificate", certificadoController.create);  
router.put("/certificate/:id", certificadoController.update); 
router.delete("/certificate/:id", certificadoController.remove);

module.exports = router;
