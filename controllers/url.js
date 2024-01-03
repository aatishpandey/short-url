const { URL } = require("../models/url");
const shortid = require("shortid");

//generate short id
const generateShortUrl = async (req, res) => {
  const originalUrl = req.body.url;

  if (!originalUrl) return res.status(400).json({ error: "URL is required" });

  const shortID = shortid.generate();
  const url = await URL.create({
    shortId: shortID,
    redirectUrl: originalUrl,
    visitHistory: [],
  });

  res.render("home", { id: shortID });
};

//redirect url
const redirectUrl = async (req, res) => {
  const id = req.params.id;

  const entry = await URL.findOneAndUpdate(
    { shortId: id },
    {
      $push: { visitHistory: { timestamp: Date.now() } },
    }
  );

  res.redirect(entry.redirectUrl);
};

//return analytics
const sendAnalytics = async (req, res) => {
  const id = req.params.id;

  const entry = await URL.findOne({ shortId: id });

  res.json({
    totalClicks: entry.visitHistory.length,
    analytics: entry.visitHistory,
  });
};

module.exports = { generateShortUrl, redirectUrl, sendAnalytics };
