const express = require("express");
require("dotenv").config();
const { connectToMongoDB } = require("./connect");
const { router } = require("./routes/url");

//connect to mongoDB
const dbUrl = process.env.MONGODB_URL;
connectToMongoDB(dbUrl)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("Error in MongoDB connection : " + err));

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/url", router);

app.listen(PORT, () => console.log(`Server started at ${PORT}`));
