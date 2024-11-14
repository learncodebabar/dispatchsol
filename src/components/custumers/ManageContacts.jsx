// ManageContacts.js
import React from "react";
import {
  Box,
  Typography,
  Grid,
} from "@mui/material";

const ManageContacts = () => {
  return (
    <Box p={3}>
      <Typography variant="h6">Manage Contacts</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography>Contact data table goes here</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ManageContacts;
