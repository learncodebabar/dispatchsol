// PrimaryInfo.js
import React, { useState } from "react";
import {
  Box,
  Grid,
  TextField,
  Checkbox,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const PrimaryInfo = () => {
  const [optionsOpen, setOptionsOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  return (
    <Box p={3}>
      <Typography variant="h6">Primary Info</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Checkbox /> Customer
          <Checkbox /> Location
          <Checkbox /> Carrier
          <Checkbox /> Leader
        </Grid>
        {/* Input Fields */}
        <Grid item xs={12} md={4}><TextField label="Customer Name" fullWidth /></Grid>
        <Grid item xs={12} md={4}><TextField label="Address" fullWidth /></Grid>
        <Grid item xs={12} md={4}><TextField label="Address 2" fullWidth /></Grid>
        <Grid item xs={12} md={4}><TextField label="Country" fullWidth /></Grid>
        <Grid item xs={12} md={4}><TextField label="Province" fullWidth /></Grid>
        <Grid item xs={12} md={4}><TextField label="City" fullWidth /></Grid>
        <Grid item xs={12} md={4}><TextField label="Postal Code" fullWidth /></Grid>
        <Grid item xs={12} md={4}><TextField label="Legal Name" fullWidth /></Grid>
        <Grid item xs={12} md={4}><TextField label="Website" fullWidth /></Grid>
        <Grid item xs={12} md={4}><TextField label="Toll Fee" fullWidth /></Grid>
        <Grid item xs={12} md={4}><TextField label="Phone" fullWidth /></Grid>
        <Grid item xs={12} md={4}><TextField label="EXT" fullWidth /></Grid>
        <Grid item xs={12} md={4}><TextField label="Email" fullWidth /></Grid>
        <Grid item xs={12} md={4}><TextField label="Fax" fullWidth /></Grid>
      </Grid>

      {/* Accordion */}
      <Box mt={2}>
        <Button onClick={() => setOptionsOpen(!optionsOpen)}>Options</Button>
        <Accordion expanded={optionsOpen} onChange={() => setOptionsOpen(!optionsOpen)}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>Options</AccordionSummary>
          <AccordionDetails>
            <Checkbox /> CSA
            <Checkbox /> CTPAT
            <Checkbox /> PIP
            <Checkbox /> Sync to QB
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}><TextField label="Shop Notes" fullWidth multiline /></Grid>
              <Grid item xs={12} md={6}><TextField label="Remarks" fullWidth multiline /></Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>

        <Button onClick={() => setNotificationsOpen(!notificationsOpen)}>Notification</Button>
        <Accordion expanded={notificationsOpen} onChange={() => setNotificationsOpen(!notificationsOpen)}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>Notification</AccordionSummary>
          <AccordionDetails>
            <Checkbox /> Send Pickup Confirm Email
            <Checkbox /> Send Delivery Confirm Email
            <Checkbox /> Send Arrival Pickup Confirm Email
            <Checkbox /> Send Arrival at Delivery Confirm Email
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
};

export default PrimaryInfo;
