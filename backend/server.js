const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const customerRoutes = require("./routes/customerRoutes");

// Load environment variables
dotenv.config();

// Initialize App
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to Database
connectDB();

// Routes
app.use("/api/customers", customerRoutes);

// Default Route
app.get("/", (req, res) => {
  res.send("Welcome t     ggfgo the API");
});

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
