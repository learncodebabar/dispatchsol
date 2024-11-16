const mongoose = require("mongoose");

// Define Schema
const customerSchema = new mongoose.Schema({}, { strict: false });

// Export the Model
const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
