import React, { useState } from "react";
import {
  Box,
  Grid,
  Tabs,
  Tab,
  Checkbox,
  TextField,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// Main Component with Tabs for Primary Info, Customer Information, and Manage Contacts
const EditCustomerForm = ({ customerData, onClose, setData, data }) => {
  const [tabIndex, setTabIndex] = useState(0);

  console.log(customerData);
  

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  const handleUpdate = () => {
    console.log("Update clicked");
  };

  return (
    <Box sx={{ width: "100%", p: 3 }}>
      <Tabs value={tabIndex} onChange={handleTabChange}>
        <Tab label="Primary Info" />
        <Tab label="Customer Information" />
        <Tab label="Manage Contacts" />
      </Tabs>

      {/* Tab Panels */}
      {tabIndex === 0 && <PrimaryInfo />}
      {tabIndex === 1 && <CustomerInformation />}
      {tabIndex === 2 && <ManageContacts />}

      {/* Update Button with Centered Alignment and Margin */}
      <Box mt={3} display="flex" justifyContent="center">
        <Button variant="contained" color="primary" onClick={handleUpdate} sx={{ mt: 2 }}>
          Update
        </Button>
      </Box>
    </Box>
  );
};

export default EditCustomerForm;

// Primary Info Tab Component
const PrimaryInfo = () => {
  const [optionsOpen, setOptionsOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  return (
    <Box p={3}>
      <Typography variant="h6">Primary Info</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Checkbox label="Customer" /> Customer
          <Checkbox label="Location" /> Location
          <Checkbox label="Carrier" /> Carrier
          <Checkbox label="Leader" /> Leader
        </Grid>

        {/* Input Fields */}
        <Grid item xs={12} md={4}> <TextField label="Customer Name"  fullWidth /> </Grid>
        <Grid item xs={12} md={4}> <TextField label="Address" fullWidth /></Grid>
        <Grid item xs={12} md={4}> <TextField label="Address 2" fullWidth /></Grid>
        <Grid item xs={12} md={4}> <TextField label="Country" fullWidth /></Grid>
        <Grid item xs={12} md={4}> <TextField label="Province" fullWidth /></Grid>
        <Grid item xs={12} md={4}> <TextField label="City" fullWidth /></Grid>
        <Grid item xs={12} md={4}> <TextField label="Postal Code" fullWidth /></Grid>
        <Grid item xs={12} md={4}> <TextField label="Legal Name" fullWidth /></Grid>
        <Grid item xs={12} md={4}> <TextField label="Website" fullWidth /></Grid>
        <Grid item xs={12} md={4}> <TextField label="Toll Fee" fullWidth /></Grid>
        <Grid item xs={12} md={4}> <TextField label="Phone" fullWidth /></Grid>
        <Grid item xs={12} md={4}> <TextField label="EXT" fullWidth /></Grid>
        <Grid item xs={12} md={4}> <TextField label="Email" fullWidth /></Grid>
        <Grid item xs={12} md={4}> <TextField label="Fax" fullWidth /></Grid>
      </Grid>

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
              <Grid item xs={12} md={6}> <TextField label="Shop Notes" fullWidth multiline /> </Grid>
              <Grid item xs={12} md={6}> <TextField label="Remarks" fullWidth multiline /> </Grid>
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

// Customer Information Tab Component
const CustomerInformation = () => {
  return (
    <Box p={3}>
      <Typography variant="h6">Customer Information</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}> <TextField label="Currency" fullWidth /> </Grid>
        <Grid item xs={12} md={4}> <TextField label="Credit Limit" fullWidth /> </Grid>
        <Grid item xs={12} md={4}> <TextField label="Available Credit" fullWidth /> </Grid>
        <Grid item xs={12} md={4}> <TextField label="Payment Term" fullWidth /> </Grid>
        <Grid item xs={12} md={4}> <TextField label="Customer Type" fullWidth /> </Grid>
        <Grid item xs={12} md={4}> <TextField label="Equipment Preference" fullWidth /> </Grid>
        <Grid item xs={12} md={4}> <TextField label="Factor Company" fullWidth /> </Grid>
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

// Manage Contacts Tab Component
const ManageContacts = () => {
  return (
    <Box p={3}>
      <Typography variant="h6">Manage Contacts</Typography>
      <Grid container spacing={2}>
        {/* Example table or list for contacts can be added here */}
        <Grid item xs={12}> <Typography>Contact data table goes here</Typography> </Grid>
      </Grid>
    </Box>
  );
};

// Nested Tabs Component
const NestedTabs = () => {
  const [nestedTabIndex, setNestedTabIndex] = useState(0);

  const handleNestedTabChange = (event, newValue) => {
    setNestedTabIndex(newValue);
  };

  return (
    <Box mt={3}>
      <Tabs value={nestedTabIndex} onChange={handleNestedTabChange}>
        <Tab label="Billing Address" />
        <Tab label="Discount" />
        <Tab label="Running Rights" />
        <Tab label="Salesman" />
      </Tabs>
      {nestedTabIndex === 0 && <BillingAddress />}
      {nestedTabIndex === 1 && <Discount />}
      {nestedTabIndex === 2 && <RunningRights />}
      {nestedTabIndex === 3 && <Salesman />}
    </Box>
  );
};

// Nested Tab Components (Billing Address, Discount, Running Rights, Salesman)
const BillingAddress = () => (
  <Box p={2}>
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}> <TextField label="Address 1" fullWidth /> </Grid>
      <Grid item xs={12} md={4}> <TextField label="Address 2" fullWidth /> </Grid>
      <Grid item xs={12} md={4}> <TextField label="Country" fullWidth /> </Grid>
      <Grid item xs={12} md={4}> <TextField label="Province/State" fullWidth /> </Grid>
      <Grid item xs={12} md={4}> <TextField label="City" fullWidth /> </Grid>
      <Grid item xs={12} md={4}> <TextField label="Postal Code" fullWidth /> </Grid>
      <Grid item xs={12} md={4}> <TextField label="Contact" fullWidth /> </Grid>
      <Grid item xs={12} md={4}> <TextField label="Email" fullWidth /> </Grid>
    </Grid>
  </Box>
);

const Discount = () => (
  <Box p={2}>
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
      <TextField label="Discount Type"  xs={12} md={4} fullWidth />
      </Grid>
      <Grid item xs={12} md={4}>
      <TextField label="Discount Mode"  xs={12} md={4} fullWidth />
      </Grid>
      <Grid item xs={12} md={4}>
      <TextField label="Discount Value"  xs={12} md={4} fullWidth />
      </Grid>
      
    </Grid>
    
    
    
  </Box>
);

const RunningRights = () => (
  <Box p={2}>
    <Grid container spacing={2}>
      <Grid item xs={12} md={3}>
        <TextField label="MC" fullWidth />
      </Grid>
      <Grid item xs={12} md={3}>
        <TextField label="DOT" fullWidth />
      </Grid>
      <Grid item xs={12} md={3}>
        <TextField label="FAST" fullWidth />
      </Grid>
      <Grid item xs={12} md={3}>
        <TextField label="NIR" fullWidth />
      </Grid>
    </Grid>
  </Box>
);

const Salesman = () => (
  <Box p={2}>
  <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <TextField label="Salesman" fullWidth />
      </Grid>
      <Grid item xs={12} md={4}>
       <TextField label="Commission Type" fullWidth />
      </Grid>
      <Grid item xs={12} md={4}>
      <TextField label="Pay Value" fullWidth />
      </Grid>
      
    </Grid>

  </Box>
);

