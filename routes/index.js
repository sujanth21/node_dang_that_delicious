const express = require("express");
const router = express.Router();

const { getHomePage, addStore, createStore } = require("../controllers/stores");

// Do work here
router.route("/").get(getHomePage);
router.route("/add").get(addStore);
router.route("/add").post(createStore);

module.exports = router;
