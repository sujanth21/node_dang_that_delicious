const express = require("express");
const router = express.Router();

const { getHomePage } = require("../controllers/stores");

// Do work here
router.route("/").get(getHomePage);

module.exports = router;
