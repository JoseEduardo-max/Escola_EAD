const express = require("express");
const router = express.Router();
const certificadoController = require("../controllers/certificadoController");

router.get("/", certificadoController.getAll);
router.get("/:id", certificadoController.getById);
router.post("/", certificadoController.create);
router.put("/:id", certificadoController.update);
router.delete("/:id", certificadoController.remove);

module.exports = router;
