const express = require("express");
const router = express.Router();

let bandasController = require("../controllers/bandasController")

router.get("/" , bandasController.index);

router.get("/:id" , bandasController.id);

router.get("/genero/:genero" , bandasController.genero);

module.exports = router;


