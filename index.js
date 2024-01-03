const express = require("express");
require("dotenv").config();
const ejs = require("ejs");
const { connectToMongoDB } = require("./connect");
const { router } = require("./routes/url");
const { staticRouter } = require("./routes/staticRouter");
const { URL } = require("./models/url");

//connect to mongoDB
const dbUrl = process.env.MONGODB_URL;
connectToMongoDB(dbUrl)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("Error in MongoDB connection : " + err));

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");

app.use("/url", router);
app.use("/", staticRouter); //server side rendering

app.listen(PORT, () => console.log(`Server started at ${PORT}`));
