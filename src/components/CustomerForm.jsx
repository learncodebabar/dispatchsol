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
  FormControlLabel,
   
} from "@mui/material";

import { addCustomer } from "../API/customerApi";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// Main Component with Tabs for Primary Info and Customer Information
const AddCustomerForm = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [formData, setFormData] = useState({
    customerType: [],
    primaryInfo: {},
    customerInformation: {},
    billingAddress: {},
    discount: {},
    runningRights: {},
    salesman: {},
    options: {},
    notifications: {},
  });

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  const handleCheckboxChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      customerType: prevData.customerType.includes(value)
        ? prevData.customerType.filter((type) => type !== value)
        : [...prevData.customerType, value],
    }));
  };

  const handleFieldChange = (section, field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [section]: {
        ...prevData[section],
        [field]: value,
      },
    }));
  };

  const handleAddCustomer = async () => {
    try {
      const response = await addCustomer(formData); // Using addCustomer function
      console.log("Customer saved successfully:", response);
      alert("Customer saved successfully!");
    } catch (error) {
      console.error("Error saving customer:", error);
      alert("Error saving customer!");
    }
  };

  return (
    <Box sx={{ width: "100%", p: 3 }}>
      <Tabs value={tabIndex} onChange={handleTabChange}>
        <Tab label="Primary Info" />
        <Tab label="Customer Information" />
      </Tabs>

      {/* Tab Panels */}
      {tabIndex === 0 && (
        <PrimaryInfo formData={formData} handleFieldChange={handleFieldChange} handleCheckboxChange={handleCheckboxChange} />
      )}
      {tabIndex === 1 && (
        <CustomerInformation formData={formData} handleFieldChange={handleFieldChange} />
      )}

      {/* Add Customer Button */}
      <Box mt={3} display="flex" justifyContent="center">
        <Button variant="contained" color="primary" onClick={handleAddCustomer} sx={{ mt: 2 }}>
          Add Customer
        </Button>
      </Box>
    </Box>
  );
};

// Primary Info Tab Component
const PrimaryInfo = ({ formData, handleFieldChange, handleCheckboxChange }) => {
  const [optionsOpen, setOptionsOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  return (
    <Box p={3}>
      <Typography variant="h6">Primary Info</Typography>
      <Grid container spacing={2}>
        {/* Checkboxes for Customer Types */}
        <Grid item xs={12}>
        {["Customer", "Location", "Carrier", "Leader"].map((label) => (
          <FormControlLabel
            key={label}
            control={
              <Checkbox
                checked={formData.customerType.includes(label)}
                onChange={() => handleCheckboxChange("customerType", label)}
              />
            }
            label={label} // This adds the label to the checkbox
          />
        ))}
        </Grid>

        {/* Input Fields */}
        {[
          "Customer Name", "Address", "Address 2", "Country", "Province", "City", "Postal Code",
          "Legal Name", "Website", "Toll Fee", "Phone", "EXT", "Email", "Fax",
        ].map((label) => (
          <Grid item xs={12} md={4} key={label}>
            <TextField
              label={label}
              fullWidth
              value={formData.primaryInfo[label.replace(" ", "_").toLowerCase()] || ""}
              onChange={(e) => handleFieldChange("primaryInfo", label.replace(" ", "_").toLowerCase(), e.target.value)}
            />
          </Grid>
        ))}

        {/* Accordion for Options */}
        <Box mt={2}>
          <Button onClick={() => setOptionsOpen(!optionsOpen)}>Options</Button>
          <Accordion expanded={optionsOpen} onChange={() => setOptionsOpen(!optionsOpen)}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>Options</AccordionSummary>
            <AccordionDetails>

             {["CSA", "CTPAT", "PIP", "Sync to QB"].map((label) => (
                <FormControlLabel
                  key={label}
                  control={
                    <Checkbox
                      checked={formData.options[label] || false}
                      onChange={() => handleFieldChange("options", label, !formData.options[label])}
                    />
                  }
                  label={label} // This adds the label to the checkbox
                />
              ))}
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Shop Notes"
                    fullWidth
                    multiline
                    value={formData.options.shopNotes || ""}
                    onChange={(e) => handleFieldChange("options", "shopNotes", e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Remarks"
                    fullWidth
                    multiline
                    value={formData.options.remarks || ""}
                    onChange={(e) => handleFieldChange("options", "remarks", e.target.value)}
                  />
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>

          {/* Accordion for Notifications */}
          <Button onClick={() => setNotificationsOpen(!notificationsOpen)}>Notification</Button>
          <Accordion expanded={notificationsOpen} onChange={() => setNotificationsOpen(!notificationsOpen)}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>Notification</AccordionSummary>
            <AccordionDetails>
            {["Send Pickup Confirm Email", "Send Delivery Confirm Email", "Send Arrival Pickup Confirm Email", "Send Arrival at Delivery Confirm Email"].map((label) => (
              <FormControlLabel
                key={label}
                control={
                  <Checkbox
                    checked={formData.notifications[label] || false}
                    onChange={() => handleFieldChange("notifications", label, !formData.notifications[label])}
                  />
                }
                label={label} // Adds the label next to the checkbox
              />
            ))}
            </AccordionDetails>
          </Accordion>
        </Box>
      </Grid>
    </Box>
  );
};

// Customer Information Tab Component
const CustomerInformation = ({ formData, handleFieldChange }) => (
  <Box p={3}>
    <Typography variant="h6">Customer Information</Typography>
    <Grid container spacing={2}>
      {[
        "Currency", "Credit Limit", "Available Credit", "Payment Term", "Customer Type",
        "Equipment Preference", "Factor Company",
      ].map((label) => (
        <Grid item xs={12} md={4} key={label}>
          <TextField
            label={label}
            fullWidth
            value={formData.customerInformation[label.replace(" ", "_").toLowerCase()] || ""}
            onChange={(e) => handleFieldChange("customerInformation", label.replace(" ", "_").toLowerCase(), e.target.value)}
          />
        </Grid>
      ))}

      <NestedTabs formData={formData} handleFieldChange={handleFieldChange} />
    </Grid>
  </Box>
);

// Nested Tabs Component for Billing, Discount, Running Rights, Salesman
const NestedTabs = ({ formData, handleFieldChange }) => {
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
      {nestedTabIndex === 0 && <BillingAddress formData={formData} handleFieldChange={handleFieldChange} />}
      {nestedTabIndex === 1 && <Discount formData={formData} handleFieldChange={handleFieldChange} />}
      {nestedTabIndex === 2 && <RunningRights formData={formData} handleFieldChange={handleFieldChange} />}
      {nestedTabIndex === 3 && <Salesman formData={formData} handleFieldChange={handleFieldChange} />}
    </Box>
  );
};

// Billing Address Tab Component
const BillingAddress = ({ formData, handleFieldChange }) => (
  <Box p={2}>
    <Typography variant="h6">Billing Address</Typography>
    <Grid container spacing={2}>
      {[
        "Billing Name", "Billing Address", "Billing Country", "Billing Province", "Billing City", "Billing Postal Code",
      ].map((label) => (
        <Grid item xs={12} md={4} key={label}>
          <TextField
            label={label}
            fullWidth
            value={formData.billingAddress[label.replace(" ", "_").toLowerCase()] || ""}
            onChange={(e) => handleFieldChange("billingAddress", label.replace(" ", "_").toLowerCase(), e.target.value)}
          />
        </Grid>
      ))}
    </Grid>
  </Box>
);

// Discount Tab Component
const Discount = ({ formData, handleFieldChange }) => (
  <Box p={2}>
    <Typography variant="h6">Discount</Typography>
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <TextField
          label="Discount Type"
          fullWidth
          value={formData.discount.discountType || ""}
          onChange={(e) => handleFieldChange("discount", "discountType", e.target.value)}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <TextField
          label="Discount Value"
          fullWidth
          value={formData.discount.discountValue || ""}
          onChange={(e) => handleFieldChange("discount", "discountValue", e.target.value)}
        />
      </Grid>
    </Grid>
  </Box>
);

// Running Rights Tab Component
const RunningRights = ({ formData, handleFieldChange }) => (
  <Box p={2}>
    <Typography variant="h6">Running Rights</Typography>
    <Grid container spacing={2}>
      {["Driver", "Owner", "Fleet"].map((label) => (
        <Grid item xs={12} md={4} key={label}>
          <TextField
            label={label}
            fullWidth
            value={formData.runningRights[label.toLowerCase()] || ""}
            onChange={(e) => handleFieldChange("runningRights", label.toLowerCase(), e.target.value)}
          />
        </Grid>
      ))}
    </Grid>
  </Box>
);

// Salesman Tab Component
const Salesman = ({ formData, handleFieldChange }) => (
  <Box p={2}>
    <Typography variant="h6">Salesman</Typography>
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <TextField
          label="Salesman Name"
          fullWidth
          value={formData.salesman.salesmanName || ""}
          onChange={(e) => handleFieldChange("salesman", "salesmanName", e.target.value)}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <TextField
          label="Salesman Email"
          fullWidth
          value={formData.salesman.salesmanEmail || ""}
          onChange={(e) => handleFieldChange("salesman", "salesmanEmail", e.target.value)}
        />
      </Grid>
    </Grid>
  </Box>
);

export default AddCustomerForm;
