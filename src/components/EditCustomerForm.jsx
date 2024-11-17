import React, { useState } from "react";
import {
  Box,
  Grid,
  Tabs,
  Tab,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const EditCustomerForm = ({ customerData }) => {
  const [tabIndex, setTabIndex] = useState(0);

  const [formData, setFormData] = useState({
    customerType: customerData?.customerType || [],
    primaryInfo: customerData?.primaryInfo || {},
    customerInformation: customerData?.customerInformation || {},
    notifications: customerData?.notifications || {},
    options: customerData?.options || {},
  });

  // Tab change handler
  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  // Handling text field change
  const handleFieldChange = (section, field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [section]: {
        ...prevData[section],
        [field]: value,
      },
    }));
  };

  // Handling checkbox change (for boolean fields)
  const handleCheckboxChange = (section, field, checked) => {
    setFormData((prevData) => ({
      ...prevData,
      [section]: {
        ...prevData[section],
        [field]: checked,
      },
    }));
  };

  // Update handler
  const handleUpdate = () => {
    console.log("Updated Data:", formData);
    alert("Customer updated successfully!");
  };

  return (
    <Box p={3}>
      <Typography variant="h6">Customer Information</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <TextField
            label="Currency"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            label="Credit Limit"
            value={creditLimit}
            onChange={(e) => setCreditLimit(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            label="Available Credit"
            value={availableCredit}
            onChange={(e) => setAvailableCredit(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            label="Payment Term"
            value={paymentTerm}
            onChange={(e) => setPaymentTerm(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            label="Customer Type"
            value={customerType}
            onChange={(e) => setCustomerType(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            label="Equipment Preference"
            value={equipmentPreference}
            onChange={(e) => setEquipmentPreference(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            label="Factor Company"
            value={factorCompany}
            onChange={(e) => setFactorCompany(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Checkbox
            checked={scaleOnSite}
            onChange={(e) => setScaleOnSite(e.target.checked)}
          />
          Scale On Site
          <Checkbox
            checked={appointmentRequired}
            onChange={(e) => setAppointmentRequired(e.target.checked)}
          />
          Always Appointment Required
          <Checkbox
            checked={taxApplied}
            onChange={(e) => setTaxApplied(e.target.checked)}
          />
          Tax Applied
        </Grid>
      </Grid>
      {/* Nested Tabs Section */}
      <NestedTabs  customerData={customerData} />
      {/* Submit Button */}
      
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
const NestedTabs = ({ customerData }) => {
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
      {nestedTabIndex === 0 && <BillingAddress billingAddressData={customerData?.billingAddress} />}
      {nestedTabIndex === 1 && <Discount discountData={customerData?.discount} />}
      {nestedTabIndex === 2 && <RunningRights runningRightsData={customerData?.runningRights} />}
      {nestedTabIndex === 3 && <Salesman salesmanData={customerData?.salesman} />}
    </Box>
  );
};

// Nested Tab Components (Billing Address, Discount, Running Rights, Salesman)
// Billing Address Tab
// Billing Address Component
// Billing Address Component
const BillingAddress = ({ billingAddressData }) => {
  const [billingname, setBilling_name] = useState(billingAddressData?.billing_name || "");
  const [address, setAddress] = useState(billingAddressData?.billing_address || "");
  const [country, setCountry] = useState(billingAddressData?.billing_country || "");
  const [province, setProvince] = useState(billingAddressData?.billing_province || "");
  const [city, setCity] = useState(billingAddressData?.billing_city || "");
  const [postalCode, setPostalCode] = useState(billingAddressData?.postalcode || "");
  const [contact, setContact] = useState(billingAddressData?.contact || "");
  const [email, setEmail] = useState(billingAddressData?.email || "");

  return (
    <Box p={2}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <TextField
            label="Billing Name"
            value={billingname}
            onChange={(e) => setBilling_name(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            label="Billing Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            label="Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            label="Province/State"
            value={province}
            onChange={(e) => setProvince(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            label="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            label="Postal Code"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            label="Contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
          />
        </Grid>
      </Grid>
    </Box>
  );
};

// Repeat similar patterns for other components: Discount, RunningRights, Salesman


const Discount = ({ discountData }) => {
  const [discountType, setDiscountType] = useState(discountData?.discountType || "");
  const [discountMode, setDiscountMode] = useState(discountData?.DiscountMode || "");
  const [discountValue, setDiscountValue] = useState(discountData?.discountValue || "");

  return (
    <Box p={2}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <TextField
            label="Discount Type"
            value={discountType}
            onChange={(e) => setDiscountType(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            label="Discount Mode"
            value={discountMode}
            onChange={(e) => setDiscountMode(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            label="Discount Value"
            value={discountValue}
            onChange={(e) => setDiscountValue(e.target.value)}
            fullWidth
          />
        </Grid>
      </Grid>
    </Box>
  );
};

const RunningRights = ({ runningRightsData }) => {
  const [mc, setMc] = useState(runningRightsData?.mc || "");
  const [dot, setDot] = useState(runningRightsData?.dot || "");
  const [fast, setFast] = useState(runningRightsData?.fast || "");
  const [nir, setNir] = useState(runningRightsData?.nir || "");

  return (
    <Box p={2}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <TextField
            label="MC"
            value={mc}
            onChange={(e) => setMc(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            label="DOT"
            value={dot}
            onChange={(e) => setDot(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            label="FAST"
            value={fast}
            onChange={(e) => setFast(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            label="NIR"
            value={nir}
            onChange={(e) => setNir(e.target.value)}
            fullWidth
          />
        </Grid>
      </Grid>
    </Box>
  );
};


const Salesman = ({ salesmanData }) => {
  const [salesman, setSalesman] = useState(salesmanData?.Salesman || "");
  const [commissionType, setCommissionType] = useState(salesmanData?.CommissionType || "");
  const [payValue, setPayValue] = useState(salesmanData?.PayValue || "");

  return (
    <Box p={2}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <TextField
            label="Salesman"
            value={salesman}
            onChange={(e) => setSalesman(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            label="Commission Type"
            value={commissionType}
            onChange={(e) => setCommissionType(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            label="Pay Value"
            value={payValue}
            onChange={(e) => setPayValue(e.target.value)}
            fullWidth
          />
        </Grid>
      </Grid>
    </Box>
  );
}
export default EditCustomerForm;