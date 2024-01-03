const express = require("express");
const {
  generateShortUrl,
  redirectUrl,
  sendAnalytics,
} = require("../controllers/url");
const router = express.Router();

router.post("/", generateShortUrl);

router.get("/:id", redirectUrl);

router.get("/analytics/:id", sendAnalytics);

module.exports = { router };
