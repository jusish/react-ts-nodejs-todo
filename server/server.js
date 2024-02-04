const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const todoRoutes = require("./routes/todoRoutes");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URI);

const db = mongoose.connection;
db.on("error", (error) => console.error("MongoDB connection error: ", error));
db.once("open", () => {
  console.log("Connected to MongoDB database");
  app.use("/", todoRoutes);
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
