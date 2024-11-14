// Salesman.js
import React from "react";
import {
  Box,
  Grid,
  TextField,
} from "@mui/material";

const Salesman = () => (
  <Box p={2}>
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}><TextField label="Salesman Name" fullWidth /></Grid>
      <Grid item xs={12} md={6}><TextField label="Salesman ID" fullWidth /></Grid>
    </Grid>
  </Box>
);

export default Salesman;
