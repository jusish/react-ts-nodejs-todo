const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const todoRoutes = require("./routes/todoRoutes");

const app = express();
