// import place model
const place = require("../models/placeSchema");

const createPlace = async (req, res) => {
  try {
    const { placeName, placeAddress, placeDescription, image } = req.body;
    console.log(req.body);
    const placeDoc = new place({
      placeName,
      placeAddress,
      placeDescription,
    });
    await placeDoc.save();
    res.json({ data: placeDoc, message: "Place created successfully" });
  } catch (err) {
    console.log(err);
  }
};

const getAllPlaces = async (req, res) => {
  // write a function to get all data from places
  try {
    // fetch all data from the database
    const places = await place.find();
    console.log(places);
    res.json({ places: places, message: "places fetched sucessfully" });
  } catch (err) {
    console.log(err);
  }
};
module.exports = { createPlace, getAllPlaces };