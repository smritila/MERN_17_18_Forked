const express = require("express");
const multer = require("multer");
const {
  createPlace,
  getAllPlaces,
  getPlace,
} = require("../controllers/placeController");

const router = express.Router();
// POST route for creating a place
router.post("/createPlace", createPlace);
router.get("/getplaces", getAllPlaces);

router.get("/getplace/:id", getPlace);
module.exports = router;
