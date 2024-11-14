// BillingAddress.js
import React from "react";
import {
  Box,
  Grid,
  TextField,
} from "@mui/material";

const BillingAddress = () => (
  <Box p={2}>
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}><TextField label="Address 1" fullWidth /></Grid>
      <Grid item xs={12} md={4}><TextField label="Address 2" fullWidth /></Grid>
      <Grid item xs={12} md={4}><TextField label="Country" fullWidth /></Grid>
      <Grid item xs={12} md={4}><TextField label="Province/State" fullWidth /></Grid>
      <Grid item xs={12} md={4}><TextField label="City" fullWidth /></Grid>
      <Grid item xs={12} md={4}><TextField label="Postal Code" fullWidth /></Grid>
    </Grid>
  </Box>
);

export default BillingAddress;
