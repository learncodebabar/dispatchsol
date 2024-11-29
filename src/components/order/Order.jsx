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
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CustomerList from "./CustomerList";

const CustomerForm = ({ formData, handleInputChange, handleNestedInputChange, setShowCustomerList }) => (
  <Box>
    <Typography variant="h6" gutterBottom color="primary">
      Customer
    </Typography>
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} sx={{ display: "flex", alignItems: "center" }}>
        <TextField
          fullWidth
          label="Customer Name"
          value={formData.customer.customerName}
          onChange={(e) =>
            handleInputChange("customer", "customerName", e.target.value)
          }
        />
        <Button
          sx={{ marginLeft: "10px", bgcolor: "primary.main", color: "white" }}
          variant="contained"
          onClick={() => setShowCustomerList(true)}
        >
          +
        </Button>
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
              sx={{ "& .MuiSwitch-track": { bgcolor: "primary.main" } }}
            />
          }
          label="Switch"
        />
      </Grid>

      <Grid item xs={12}>
        <Typography color="primary">Load Directions</Typography>
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
              control={<Radio sx={{ color: "primary.main" }} />}
              label={option}
            />
          ))}
        </RadioGroup>
      </Grid>

      <Grid item xs={12} sm={6}>
        <Typography variant="subtitle1" color="secondary">Additional Info</Typography>
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
          sx={{ mt: 1 }}
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
          sx={{ mt: 1 }}
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <Typography variant="subtitle1" color="secondary">Cross Border</Typography>
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
          sx={{ mt: 1 }}
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
          sx={{ mt: 1 }}
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
          sx={{ mt: 1 }}
        />
      </Grid>
    </Grid>
  </Box>
);
const OrderForm = () => {
  const [formData, setFormData] = useState({
    customer: {
      customerName: "",
      customerOrderNo: "",
      date: "",
      switchValue: false,
      loadDirection: "",
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

  const [showCustomerList, setShowCustomerList] = useState(false);
  const [expanded, setExpanded] = useState("customer");

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleInputChange = (section, field, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [section]: {
        ...prevState[section],
        [field]: value,
      },
    }));
  };

  const handleNestedInputChange = (section, nestedSection, field, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [section]: {
        ...prevState[section],
        [nestedSection]: {
          ...prevState[section][nestedSection],
          [field]: value,
        },
      },
    }));
  };

  const handleCustomerSelect = (customerName) => {
    setFormData((prevState) => ({
      ...prevState,
      customer: {
        ...prevState.customer,
        customerName: customerName,
      },
    }));
    setShowCustomerList(false);
  };

  const handleSubmit = () => {
    console.log("Form Data:", formData);
  };

  if (showCustomerList) {
    return <CustomerList onSelectCustomer={handleCustomerSelect} />;
  }

  return (
    <Box sx={{ padding: "20px", width: "100%", maxWidth: "100%" }}>
      <Accordion expanded={expanded === "customer"} onChange={handleAccordionChange("customer")}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color="primary">Customer</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <CustomerForm
            formData={formData}
            handleInputChange={handleInputChange}
            handleNestedInputChange={handleNestedInputChange}
            setShowCustomerList={setShowCustomerList}
          />
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === "revenue"} onChange={handleAccordionChange("revenue")}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color="primary">Revenue</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            <Typography variant="h4" color="primary">
              Revenue Inputs Here
            </Typography>
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === "shipments"} onChange={handleAccordionChange("shipments")}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color="primary">Shipments</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            <Typography variant="h4" color="primary">
              Shipment Inputs Here
            </Typography>
          </Box>
        </AccordionDetails>
      </Accordion>

      <Box sx={{ marginTop: "20px", textAlign: "right", width: "100%" }}>
        <Button variant="contained" sx={{ bgcolor: "primary.main", color: "white" }} fullWidth onClick={handleSubmit}>
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default OrderForm;

