import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
} from "@mui/material";

const CustomerForm = ({ open, handleClose }) => {
  const [customerData, setCustomerData] = useState({
    refId: "",
    name: "",
    type: "",
    address: "",
    phone: "",
    fax: "",
    email: "",
    extraInfo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomerData({ ...customerData, [name]: value });
  };

  const handleSubmit = () => {
    // Handle the form submission, e.g., send the data to an API or save it
    console.log("Customer Data:", customerData);
    handleClose(); // Close the dialog after submission
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="lg" // Full screen on large screens
      fullWidth={true} // Ensures dialog occupies full width
      sx={{
        "& .MuiDialog-paper": {
          height: "100%", // Ensure dialog takes up full height
        },
      }}
    >
      <DialogTitle>Create New Customer</DialogTitle>
      <DialogContent sx={{ width: "100%", height: "100%", padding: "20px" }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField
            label="Ref ID"
            variant="outlined"
            name="refId"
            value={customerData.refId}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Name"
            variant="outlined"
            name="name"
            value={customerData.name}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Type"
            variant="outlined"
            name="type"
            value={customerData.type}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Address"
            variant="outlined"
            name="address"
            value={customerData.address}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Phone"
            variant="outlined"
            name="phone"
            value={customerData.phone}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Fax"
            variant="outlined"
            name="fax"
            value={customerData.fax}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Email"
            variant="outlined"
            name="email"
            value={customerData.email}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Extra Info"
            variant="outlined"
            name="extraInfo"
            value={customerData.extraInfo}
            onChange={handleChange}
            fullWidth
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CustomerForm;
