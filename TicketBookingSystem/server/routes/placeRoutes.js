const express = require("express");
const multer = require("multer");
const { createPlace, getAllPlaces } = require("../controllers/placeController");

const router = express.Router();
// POST route for creating a place
router.post("/createPlace", createPlace);
router.get("/getplaces", getAllPlaces);

module.exports = router;
