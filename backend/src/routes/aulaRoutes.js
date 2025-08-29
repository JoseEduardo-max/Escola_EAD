const express = require("express");
const router = express.Router();
const aulaController = require("../controllers/aulaController");

router.get("/Class", aulaController.getAll);
router.get("/class/:id", aulaController.getById);
router.post("/Class", aulaController.create);
router.put("/Class/:id", aulaController.update);
router.delete("/Class/:id", aulaController.remove);

module.exports = router;
