const express = require("express");
const router = express.Router();
const moduloController = require("../controllers/moduloController");

router.get("/modules", moduloController.getAll);  
router.get("/modules/:id", moduloController.getById); 
router.post("/modules", moduloController.create);   
router.put("/modules/:id", moduloController.update);  
router.delete("/modules/:id", moduloController.remove);

module.exports = router;
