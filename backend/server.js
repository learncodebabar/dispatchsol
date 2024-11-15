const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

// Initialize app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
const PORT = process.env.PORT || 5000;
const MONGO_URI = "mongodb+srv://dispatchsol:dispatchsol123@dispatchsolution.gwvmx.mongodb.net/";
mongoose.set("strictQuery",true)
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));



// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
