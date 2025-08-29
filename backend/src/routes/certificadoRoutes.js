const express = require("express");
const router = express.Router();
const certificadoController = require("../controllers/certificadoController");

router.get("/Certificate", certificadoController.getAll);
router.get("/certificate/:id", certificadoController.getById);
router.post("/Certificate", certificadoController.create);
router.put("/Certificate/:id", certificadoController.update);
router.delete("/Certificate/:id", certificadoController.remove);

module.exports = router;
