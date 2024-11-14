// RunningRights.js
import React from "react";
import {
  Box,
  TextField,
  Grid,
} from "@mui/material";

const RunningRights = () => (
  <Box p={2}>
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}><TextField label="Starting Date" fullWidth /></Grid>
      <Grid item xs={12} md={6}><TextField label="Ending Date" fullWidth /></Grid>
    </Grid>
  </Box>
);

export default RunningRights;
