const express = require("express");
const router = express.Router();
const moduloController = require("../controllers/moduloController");

router.get("/", moduloController.getAll);
router.get("/:id", moduloController.getById);
router.post("/", moduloController.create);
router.put("/:id", moduloController.update);
router.delete("/:id", moduloController.remove);

module.exports = router;
