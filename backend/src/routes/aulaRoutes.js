const express = require("express");
const router = express.Router();
const aulaController = require("../controllers/aulaController");

router.get("/allClass", aulaController.getAll);
router.get("/class/:id", aulaController.getById);
router.post("/createClass", aulaController.create);
router.put("/editClass/:id", aulaController.update);
router.delete("/deleteClass/:id", aulaController.remove);

module.exports = router;
