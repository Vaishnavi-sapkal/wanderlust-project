const express = require("express");
const router = express.Router();
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const filterController = require("../controllers/filters.js");
const listingController = require("../controllers/listings.js");

//trending route
router.get("/trending", wrapAsync(listingController.index));

//Rooms route
router.get("/Rooms", wrapAsync(filterController.renderRooms));

//Iconic_cities route
router.get("/Iconic_cities", wrapAsync(filterController.renderIconic_cities));

//Mountains route
router.get("/Mountains", wrapAsync(filterController.renderMountains));

//Castles route
router.get("/Castles", wrapAsync(filterController.renderCastles));

//Amazing_Pool route
router.get("/Amazing_Pool", wrapAsync(filterController.renderAmazing_Pool));

//Forest route
router.get("/Forest", wrapAsync(filterController.renderForest));

//Camping route
router.get("/Camping", wrapAsync(filterController.renderCamping));

//Farm route
router.get("/Farm", wrapAsync(filterController.renderFarm));

//arctic route
router.get("/arctic", wrapAsync(filterController.renderarctic));

//Domes route
router.get("/Domes", wrapAsync(filterController.renderDomes));

//Boots route
router.get("/Boot", wrapAsync(filterController.renderBoots));

module.exports = router;
