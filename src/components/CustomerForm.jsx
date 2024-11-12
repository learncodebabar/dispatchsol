import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
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
    console.log("Customer Data:", customerData);
    handleClose(); // Close the dialog after submission
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="lg"
      fullWidth={true}
    >
      <DialogTitle>Create New Customer</DialogTitle>
      <DialogContent>
        <Box sx={{ padding: "20px" }}>
          <Grid container spacing={2}>
            {/* Each input field with a three-column layout on large screens, single column on small screens */}
            <Grid item xs={12} md={4}>
              <TextField
                label="Ref ID"
                variant="outlined"
                name="refId"
                value={customerData.refId}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                label="Name"
                variant="outlined"
                name="name"
                value={customerData.name}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                label="Type"
                variant="outlined"
                name="type"
                value={customerData.type}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                label="Address"
                variant="outlined"
                name="address"
                value={customerData.address}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                label="Phone"
                variant="outlined"
                name="phone"
                value={customerData.phone}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                label="Fax"
                variant="outlined"
                name="fax"
                value={customerData.fax}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                label="Email"
                variant="outlined"
                name="email"
                value={customerData.email}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                label="Extra Info"
                variant="outlined"
                name="extraInfo"
                value={customerData.extraInfo}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
          </Grid>
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
