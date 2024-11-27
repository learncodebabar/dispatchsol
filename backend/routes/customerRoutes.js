const express = require("express");
const Customer = require("../models/Customer");

const router = express.Router();

// Handle Form Submission
router.post("/", async (req, res) => {
  try {
    const newCustomer = new Customer(req.body);
    await newCustomer.save();
    res.status(201).send({ message: "Customer saved successfully!" });
  } catch (error) {
    res.status(500).send({ message: "Error saving customer", error });
  }
});

// Fetch All Customers
router.get("/", async (req, res) => {
    try {
      const customers = await Customer.find(); // Fetch all documents
      res.status(200).send(customers);
    } catch (error) {
      res.status(500).send({ message: "Error fetching customers", error });
    }
  });
  
  // Fetch a Single Customer by ID
  router.get("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const customer = await Customer.findById(id);
      if (!customer) {
        return res.status(404).send({ message: "Customer not found" });
      }
      res.status(200).send(customer);
    } catch (error) {
      res.status(500).send({ message: "Error fetching customer", error });
    }
  });

// In your Express backend (e.g., server.js)
router.put('/:id', async (req, res) => {
  try {
    const updatedCustomer = await Customer.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedCustomer);
  } catch (error) {
    res.status(500).send(error);
  }
});
// In your Express backend (e.g., server.js)

// In your Express backend (e.g., server.js)


// Default Route for Testing
router.get("/", (req, res) => {
  res.send("Customer API is working!");
});

module.exports = router;
