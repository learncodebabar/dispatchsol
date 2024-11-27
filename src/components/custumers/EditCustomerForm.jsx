import React, { useState, useEffect } from 'react';
import { Box, Button, TextField, Tabs, Tab, Grid, Accordion, AccordionSummary, AccordionDetails, FormControlLabel, Checkbox, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import axios from 'axios';
import { updateCustomer } from '../../API/customerApi';

const EditCustomerForm = ({ customerData, onClose, setData, data }) => {
  const [tabIndex, setTabIndex] = useState(0);
  const [formData, setFormData] = useState(customerData);

  useEffect(() => {
    setFormData(customerData); // Populate form data on receiving new customerData
  }, [customerData]);

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
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

  const handleUpdateCustomer = async () => {
     console.log(customerData._id);
     
    try {
      const response = await updateCustomer(customerData._id, formData);
      console.log("Customer updated successfully:", response);
      // const updatedData = data.map((item) => item._id === response.data._id ? response.data : item);
      // setData(updatedData);
      onClose();
    } catch (error) {
      console.error("Error updating customer:", error);
    }
  };
  

  return (
    <Box sx={{ width: '100%', p: 3 }}>
      <Tabs value={tabIndex} onChange={handleTabChange}>
        <Tab label="Primary Info" />
        <Tab label="Customer Information" />
      </Tabs>

      {tabIndex === 0 && (
        <PrimaryInfo formData={formData} handleFieldChange={handleFieldChange} />
      )}
      {tabIndex === 1 && (
        <CustomerInformation formData={formData} handleFieldChange={handleFieldChange} />
      )}

      <Box mt={3} display="flex" justifyContent="center">
        <Button variant="contained" color="primary" onClick={handleUpdateCustomer} sx={{ mt: 2 }}>
          Update Customer
        </Button>
        <Button variant="outlined" color="secondary" onClick={onClose} sx={{ mt: 2, ml: 2 }}>
          Cancel
        </Button>
      </Box>
    </Box>
  );
};

const PrimaryInfo = ({ formData, handleFieldChange }) => {
  const [optionsOpen, setOptionsOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const customerType = Array.isArray(formData.customerType) ? formData.customerType : [];

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
                  checked={customerType.includes(label)}
                  onChange={() => {
                    const newCustomerType = customerType.includes(label) 
                      ? customerType.filter(type => type !== label) 
                      : [...customerType, label];
                    handleFieldChange('customerType', newCustomerType);
                  }}
                />
              }
              label={label}
            />
          ))}
        </Grid>

        {/* Input Fields */}
        {[
          "Customer Name", "Address", "Address 2", "Country", "Province", "City", "Postal Code",
          "Legal Name", "Website", "Toll Fee", "Phone", "EXT", "Email", "Fax"
        ].map((label) => (
          <Grid item xs={12} md={4} key={label}>
            <TextField
              label={label}
              fullWidth
              value={formData.primaryInfo?.[label.replace(/ /g, "_").toLowerCase()] || ""}
              onChange={(e) => handleFieldChange("primaryInfo", label.replace(/ /g, "_").toLowerCase(), e.target.value)}
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
                      checked={formData.options?.[label] || false}
                      onChange={(e) => handleFieldChange("options", label, e.target.checked)}
                    />
                  }
                  label={label}
                />
              ))}
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Shop Notes"
                    fullWidth
                    multiline
                    value={formData.options?.shopNotes || ""}
                    onChange={(e) => handleFieldChange("options", "shopNotes", e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Remarks"
                    fullWidth
                    multiline
                    value={formData.options?.remarks || ""}
                    onChange={(e) => handleFieldChange("options", "remarks", e.target.value)}
                  />
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>

          {/* Accordion for Notifications */}
          <Button onClick={() => setNotificationsOpen(!notificationsOpen)}>Notifications</Button>
          <Accordion expanded={notificationsOpen} onChange={() => setNotificationsOpen(!notificationsOpen)}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>Notifications</AccordionSummary>
            <AccordionDetails>
              {["SendPickupConfirmEmail", "SendDeliveryConfirmEmail", "SendArrivalPickupConfirmEmail", "SendArrivalatDeliveryConfirmEmail"].map((label) => (
                <FormControlLabel
                  key={label}
                  control={
                    <Checkbox
                      checked={formData.notifications?.[label] || false}
                      onChange={(e) => handleFieldChange("notifications", label, e.target.checked)}
                    />
                  }
                  label={label}
                />
              ))}
            </AccordionDetails>
          </Accordion>
        </Box>
      </Grid>
    </Box>
  );
};




const CustomerInformation = ({ formData, handleFieldChange }) => {
  const [nestedTabIndex, setNestedTabIndex] = useState(0);

  const handleNestedTabChange = (event, newValue) => {
    setNestedTabIndex(newValue);
  };

  return (
    <Box p={3}>
      <Typography variant="h6">Customer Information</Typography>
      <Grid container spacing={2}>
        {[
          "Currency", "Credit Limit", "Available Credit", "Payment Term", "Customer Type",
          "Equipment Preference", "Factor Company"
        ].map((label) => (
          <Grid item xs={12} md={4} key={label}>
            <TextField
              label={label}
              fullWidth
              value={formData.customerInformation?.[label.replace(/ /g, "_").toLowerCase()] || ""}
              onChange={(e) => handleFieldChange("customerInformation", label.replace(/ /g, "_").toLowerCase(), e.target.value)}
            />
          </Grid>
        ))}
        <Grid item xs={12} md={8}>
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.customerInformation?.scaleOnSite || false}
                onChange={(e) => handleFieldChange("customerInformation", "scaleOnSite", e.target.checked)}
              />
            }
            label="Scale On Site"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.customerInformation?.alwaysAppointmentRequired || false}
                onChange={(e) => handleFieldChange("customerInformation", "alwaysAppointmentRequired", e.target.checked)}
              />
            }
            label="Always Appointment Required"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.customerInformation?.taxApplied || false}
                onChange={(e) => handleFieldChange("customerInformation", "taxApplied", e.target.checked)}
              />
            }
            label="Tax Applied"
          />
        </Grid>
      </Grid>

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
    </Box>
  );
};

// Billing Address Tab Component
const BillingAddress = ({ formData, handleFieldChange }) => (
  <Box p={2}>
    <Typography variant="h6">Billing Address</Typography>
    <Grid container spacing={2}>
      {[
        "Billing Name", "Billing Address", "Billing Country", "Billing Province", "Billing City", "PostalCode","Contact","Email"
      ].map((label) => (
        <Grid item xs={12} md={4} key={label}>
          <TextField
            label={label}
            fullWidth
            value={formData.billingAddress?.[label.replace(/ /g, "_").toLowerCase()] || ""}
            onChange={(e) => handleFieldChange("billingAddress", label.replace(/ /g, "_").toLowerCase(), e.target.value)}
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
          value={formData.discount?.discountType || ""}
          onChange={(e) => handleFieldChange("discount", "discountType", e.target.value)}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <TextField
          label="Discount Mode"
          fullWidth
          value={formData.discount?.DiscountMode || ""}
          onChange={(e) => handleFieldChange("discount", "DiscountMode", e.target.value)}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <TextField
          label="Discount Value"
          fullWidth
          value={formData.discount?.discountValue || ""}
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
      {["MC", "DOT", "FAST","NIR"].map((label) => (
        <Grid item xs={12} md={4} key={label}>
          <TextField
            label={label}
            fullWidth
            value={formData.runningRights?.[label.toLowerCase()] || ""}
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
      {/* Salesman Name */}
      <Grid item xs={12} md={4}>
        <TextField
          label="Salesman"
          fullWidth
          value={formData.salesman?.Salesman || ""}
          onChange={(e) =>
            handleFieldChange("salesman", "Salesman", e.target.value)
          }
        />
      </Grid>

      {/* Commission Type */}
      <Grid item xs={12} md={4}>
        <TextField
          label="Commission Type"
          fullWidth
          value={formData.salesman?.CommissionType || ""}
          onChange={(e) =>
            handleFieldChange("salesman", "CommissionType", e.target.value)
          }
        />
      </Grid>

      {/* Pay Value */}
      <Grid item xs={12} md={4}>
        <TextField
          label="Pay Value"
          fullWidth
          value={formData.salesman?.PayValue || ""}
          onChange={(e) =>
            handleFieldChange("salesman", "PayValue", e.target.value)
          }
        />
      </Grid>
    </Grid>
  </Box>
);

export default  EditCustomerForm