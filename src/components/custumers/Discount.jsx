// Discount.js
import React from "react";
import {
  Box,
  TextField,
  Grid,
} from "@mui/material";

const Discount = () => (
  <Box p={2}>
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}><TextField label="Discount Percentage" fullWidth /></Grid>
      <Grid item xs={12} md={6}><TextField label="Discount Value" fullWidth /></Grid>
    </Grid>
  </Box>
);

export default Discount;
