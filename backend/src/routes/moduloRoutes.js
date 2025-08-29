const express = require("express");
const router = express.Router();
const moduloController = require("../controllers/moduloController");

router.get("/Models", moduloController.getAll);
router.get("/Models/:id", moduloController.getById);
router.post("/Models", moduloController.create);
router.put("/Models/:id", moduloController.update);
router.delete("/Models/:id", moduloController.remove);

module.exports = router;
