const express = require("express");
const router = express.Router();
const aulaController = require("../controllers/aulaController");

router.get("/class", aulaController.getAll); 
router.get("/class/:id", aulaController.getById);  
router.post("/class", aulaController.create);    
router.put("/class/:id", aulaController.update); 
router.delete("/class/:id", aulaController.remove);

module.exports = router;
