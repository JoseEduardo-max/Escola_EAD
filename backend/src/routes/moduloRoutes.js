const express = require("express");
const router = express.Router();
const moduloController = require("../controllers/moduloController");

router.get("/allModels", moduloController.getAll);
router.get("/Models/:id", moduloController.getById);
router.post("/createModels", moduloController.create);
router.put("/editModels/:id", moduloController.update);
router.delete("/deleteModels/:id", moduloController.remove);

module.exports = router;
