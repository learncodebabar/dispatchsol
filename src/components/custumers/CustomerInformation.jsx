// CustomerInformation.js
import React from "react";
import {
  Box,
  Grid,
  TextField,
  Checkbox,
  Typography,
} from "@mui/material";
import NestedTabs from './NestedTabs';

const CustomerInformation = () => {
  return (
    <Box p={3}>
      <Typography variant="h6">Customer Information</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}><TextField label="Currency" fullWidth /></Grid>
        <Grid item xs={12} md={4}><TextField label="Credit Limit" fullWidth /></Grid>
        <Grid item xs={12} md={4}><TextField label="Available Credit" fullWidth /></Grid>
        <Grid item xs={12} md={4}><TextField label="Payment Term" fullWidth /></Grid>
        <Grid item xs={12} md={4}><TextField label="Customer Type" fullWidth /></Grid>
        <Grid item xs={12} md={4}><TextField label="Equipment Preference" fullWidth /></Grid>
        <Grid item xs={12} md={4}><TextField label="Factor Company" fullWidth /></Grid>
        <Grid item xs={12} md={8}>
          <Checkbox /> Scale On Site
          <Checkbox /> Always Appointment Required
          <Checkbox /> Tax Applied
        </Grid>
      </Grid>
      <NestedTabs />
    </Box>
  );
};

export default CustomerInformation;
