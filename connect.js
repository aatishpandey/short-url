const mongoose = require("mongoose");

const connectToMongoDB = (dbUrl) => {
  return mongoose.connect(dbUrl);
};

module.exports = { connectToMongoDB };
