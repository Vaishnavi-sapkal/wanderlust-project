const Listing = require("../models/listing.js");

module.exports.renderRooms = async (req, res) => {
  const roomListings = await Listing.find({ category: "room" });
  res.render("listings/filtersforms/room.ejs", { roomListings });
};

module.exports.renderIconic_cities = async (req, res) => {
  const cityListings = await Listing.find({ category: "city" });
  res.render("listings/filtersforms/city.ejs", { cityListings });
};

module.exports.renderMountains = async (req, res) => {
  const mountainListings = await Listing.find({ category: "mountain" });
  res.render("listings/filtersforms/mountain.ejs", { mountainListings });
};

module.exports.renderCastles = async (req, res) => {
  const castleListings = await Listing.find({ category: "castle" });
  res.render("listings/filtersforms/castle.ejs", { castleListings });
};

module.exports.renderAmazing_Pool = async (req, res) => {
  const poolListings = await Listing.find({ category: "pool" });
  res.render("listings/filtersforms/pool.ejs", { poolListings });
};

module.exports.renderForest = async (req, res) => {
  const forestListings = await Listing.find({ category: "forest" });
  res.render("listings/filtersforms/forest.ejs", { forestListings });
};

module.exports.renderCamping = async (req, res) => {
  const campingListings = await Listing.find({ category: "camping" });
  res.render("listings/filtersforms/camping.ejs", { campingListings });
};

module.exports.renderFarm = async (req, res) => {
  const farmListings = await Listing.find({ category: "farm" });
  res.render("listings/filtersforms/farm.ejs", { farmListings });
};

module.exports.renderarctic = async (req, res) => {
  const arcticListings = await Listing.find({ category: "arctic" });
  res.render("listings/filtersforms/arctic.ejs", { arcticListings });
};

module.exports.renderDomes = async (req, res) => {
  const domeListings = await Listing.find({ category: "dome" });
  res.render("listings/filtersforms/dome.ejs", { domeListings });
};

module.exports.renderBoots = async (req, res) => {
  const bootListings = await Listing.find({ category: "boot" });
  res.render("listings/filtersforms/boot.ejs", { bootListings });
};
