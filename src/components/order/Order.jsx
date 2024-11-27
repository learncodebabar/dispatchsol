import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Switch,
  FormControlLabel,
  RadioGroup,
  Radio,
  Tab,
  Tabs,
  Select,
  MenuItem,
  Button,
} from "@mui/material";

const OrderForm = () => {
  const [formData, setFormData] = useState({
    customer: {
      customerName: "",
      customerOrderNo: "",
      date: "",
      switchValue: false,
      loadDirection: "",
      salesman: "",
      commission: "",
      emailForNotification: "",
      orderNotes: "",
      additionalInfo: {
        scaleTicket: "",
        scaleTicketLocation: "",
      },
      crossBorder: {
        tripType: "",
        scacCanada: "",
        poeUsCanada: "",
      },
    },
  });

  const [tabIndex, setTabIndex] = useState(0);

  const handleInputChange = (section, field, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [section]: {
        ...prevState[section],
        [field]: value,
      },
    }));
  };

  const handleNestedInputChange = (section, nestedField, field, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [section]: {
        ...prevState[section],
        [nestedField]: {
          ...prevState[section][nestedField],
          [field]: value,
        },
      },
    }));
  };

  const handleSubmit = () => {
    console.log(formData);
    alert("Form submitted!");
  };

  return (
    <Box sx={{ padding: "20px", width: "100%", maxWidth: "100%" }}>
      {/* Tabs Navigation */}
      <Tabs
        value={tabIndex}
        onChange={(e, newValue) => setTabIndex(newValue)}
        textColor="primary"
        indicatorColor="primary"
        variant="fullWidth"
      >
        <Tab label="Customer" />
        <Tab label="Revenue" />
        <Tab label="Shipments" />
      </Tabs>

      {/* Tab Panels */}
      {tabIndex === 0 && (
        <Box sx={{ padding: "20px" }}>
          <Typography variant="h6" gutterBottom>
            Customer
          </Typography>
          <Grid container spacing={2}>
            {/* First Row */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Customer Name"
                value={formData.customer.customerName}
                onChange={(e) =>
                  handleInputChange("customer", "customerName", e.target.value)
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Customer Order No"
                value={formData.customer.customerOrderNo}
                onChange={(e) =>
                  handleInputChange("customer", "customerOrderNo", e.target.value)
                }
              />
            </Grid>

            {/* Second Row */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                type="date"
                label="Date"
                InputLabelProps={{ shrink: true }}
                value={formData.customer.date}
                onChange={(e) =>
                  handleInputChange("customer", "date", e.target.value)
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControlLabel
                control={
                  <Switch
                    checked={formData.customer.switchValue}
                    onChange={(e) =>
                      handleInputChange("customer", "switchValue", e.target.checked)
                    }
                  />
                }
                label="Switch"
              />
            </Grid>

            {/* Third Row */}
            <Grid item xs={12}>
              <Typography>Load Directions</Typography>
              <RadioGroup
                row
                value={formData.customer.loadDirection}
                onChange={(e) =>
                  handleInputChange("customer", "loadDirection", e.target.value)
                }
              >
                {[
                  "Outbound US",
                  "Inbound Canada",
                  "City",
                  "In Province",
                  "In Canada",
                ].map((option) => (
                  <FormControlLabel
                    key={option}
                    value={option}
                    control={<Radio />}
                    label={option}
                  />
                ))}
              </RadioGroup>
            </Grid>

            {/* Fourth Row */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Salesman"
                value={formData.customer.salesman}
                onChange={(e) =>
                  handleInputChange("customer", "salesman", e.target.value)
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Commission"
                value={formData.customer.commission}
                onChange={(e) =>
                  handleInputChange("customer", "commission", e.target.value)
                }
              />
            </Grid>

            {/* Fifth Row */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email for Notification"
                value={formData.customer.emailForNotification}
                onChange={(e) =>
                  handleInputChange("customer", "emailForNotification", e.target.value)
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                multiline
                rows={3}
                label="Order Notes"
                value={formData.customer.orderNotes}
                onChange={(e) =>
                  handleInputChange("customer", "orderNotes", e.target.value)
                }
              />
            </Grid>

            {/* Sixth Row: Additional Info */}
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1">Additional Info</Typography>
              <TextField
                fullWidth
                label="Scale Ticket"
                value={formData.customer.additionalInfo.scaleTicket}
                onChange={(e) =>
                  handleNestedInputChange(
                    "customer",
                    "additionalInfo",
                    "scaleTicket",
                    e.target.value
                  )
                }
              />
              <TextField
                fullWidth
                label="Scale Ticket Location"
                value={formData.customer.additionalInfo.scaleTicketLocation}
                onChange={(e) =>
                  handleNestedInputChange(
                    "customer",
                    "additionalInfo",
                    "scaleTicketLocation",
                    e.target.value
                  )
                }
              />
            </Grid>

            {/* Seventh Row: Cross Border */}
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1">Cross Border</Typography>
              <TextField
                fullWidth
                label="Trip Type"
                value={formData.customer.crossBorder.tripType}
                onChange={(e) =>
                  handleNestedInputChange(
                    "customer",
                    "crossBorder",
                    "tripType",
                    e.target.value
                  )
                }
              />
              <TextField
                fullWidth
                label="SCAC Canada"
                value={formData.customer.crossBorder.scacCanada}
                onChange={(e) =>
                  handleNestedInputChange(
                    "customer",
                    "crossBorder",
                    "scacCanada",
                    e.target.value
                  )
                }
              />
              <TextField
                fullWidth
                label="POE US/Canada"
                value={formData.customer.crossBorder.poeUsCanada}
                onChange={(e) =>
                  handleNestedInputChange(
                    "customer",
                    "crossBorder",
                    "poeUsCanada",
                    e.target.value
                  )
                }
              />
            </Grid>
          </Grid>
        </Box>
      )}
      {tabIndex === 1 && (
        <Box sx={{ padding: "20px", width: "100%" }}>
          <Typography variant="h1">Revenue</Typography>
        </Box>
      )}
      {tabIndex === 2 && (
        <Box sx={{ padding: "20px", width: "100%" }}>
          <Typography variant="h3">Shipments</Typography>
        </Box>
      )}

      {/* Submit Button */}
      <Box sx={{ marginTop: "20px", textAlign: "right", width: "100%" }}>
        <Button variant="contained" fullWidth onClick={handleSubmit}>
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default OrderForm;
