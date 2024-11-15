import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
} from "@mui/material";

const CustomerForm = ({ open, handleClose }) => {
  const [primaryInfo, setPrimaryInfo] = useState({
    customer: false,
    location: false,
    carrier: false,
    leader: false,
    customerName: "",
    address1: "",
    address2: "",
    country: "",
    province: "",
    city: "",
    postalCode: "",
    legalName: "",
    website: "",
    tollFree: "",
    phone: "",
    ext: "",
    email: "",
    fax: ""
  });

  // Options Accordion
  const [options, setOptions] = useState({
    CSA: false,
    CTPAT: false,
    PIP: false,
    syncToQB: false,
    shopNotes: "",
    remarks: ""
  });

  // Notifications Accordion
  const [notifications, setNotifications] = useState({
    sendPickupConfirmEmail: false,
    sendDeliveryConfirmEmail: false,
    sendArrivalPickupConfirmEmail: false,
    sendArrivalDeliveryConfirmEmail: false
  });

  // Customer Information
  const [customerInfo, setCustomerInfo] = useState({
    currency: "",
    creditLimit: "",
    availableCredit: "",
    paymentTerm: "",
    customerType: "",
    equipmentPreference: "",
    preferredCustomerBroker: "",
    factorCompany: "",
    scaleOnSite: false,
    alwaysAppointmentRequired: false,
    taxApplied: false
  });

  // Billing Address (nested tab inside Customer Information)
  const [billingAddress, setBillingAddress] = useState({
    address1: "",
    address2: "",
    country: "",
    province: "",
    city: "",
    postalCode: "",
    contact: "",
    email: "",
    phone: "",
    fax: ""
  });

  // Discount
  const [discount, setDiscount] = useState({
    discountType: "",
    discountMode: "",
    discountValue: ""
  });

  // Running Rights
  const [runningRights, setRunningRights] = useState({
    MC: "",
    DOT: "",
    FAST: "",
    NIR: "",
    WSIB: "",
    FedID: "",
    GST: "",
    PST: ""
  });

  // Salesman
  const [salesman, setSalesman] = useState({
    commissionType: "",
    payValue: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Handling changes dynamically
    if (name.startsWith("primaryInfo")) {
      setPrimaryInfo(prev => ({ ...prev, [name.split(".")[1]]: value }));
    } else if (name.startsWith("options")) {
      setOptions(prev => ({ ...prev, [name.split(".")[1]]: value }));
    } else if (name.startsWith("notifications")) {
      setNotifications(prev => ({ ...prev, [name.split(".")[1]]: value }));
    } else if (name.startsWith("customerInfo")) {
      setCustomerInfo(prev => ({ ...prev, [name.split(".")[1]]: value }));
    } else if (name.startsWith("billingAddress")) {
      setBillingAddress(prev => ({ ...prev, [name.split(".")[1]]: value }));
    } else if (name.startsWith("discount")) {
      setDiscount(prev => ({ ...prev, [name.split(".")[1]]: value }));
    } else if (name.startsWith("runningRights")) {
      setRunningRights(prev => ({ ...prev, [name.split(".")[1]]: value }));
    } else if (name.startsWith("salesman")) {
      setSalesman(prev => ({ ...prev, [name.split(".")[1]]: value }));
    }
  };

  const handleSubmit = () => {
    alert('')
    // Consolidate the data for logging
    const customerData = {
      primaryInfo,
      options,
      notifications,
      customerInfo,
      billingAddress,
      discount,
      runningRights,
      salesman,
    };

    console.log("Customer Data:", customerData);

    // You can now send this data to your backend here
    handleClose(); // Close the dialog after submission
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="lg" fullWidth={true}>
      <DialogTitle>Create New Customer</DialogTitle>
      <DialogContent>
        <Box sx={{ padding: "20px" }}>
          <Grid container spacing={3}>
            {/* Primary Info */}
            <Grid item xs={12} md={4}>
              <TextField
                label="Customer Name"
                variant="outlined"
                name="primaryInfo.customerName"
                value={primaryInfo.customerName}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                label="Address 1"
                variant="outlined"
                name="primaryInfo.address1"
                value={primaryInfo.address1}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                label="Country"
                variant="outlined"
                name="primaryInfo.country"
                value={primaryInfo.country}
                onChange={handleChange}
                fullWidth
              />
            </Grid>

            {/* Customer Info */}
            <Grid item xs={12} md={4}>
              <TextField
                label="Currency"
                variant="outlined"
                name="customerInfo.currency"
                value={customerInfo.currency}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                label="Credit Limit"
                variant="outlined"
                name="customerInfo.creditLimit"
                value={customerInfo.creditLimit}
                onChange={handleChange}
                fullWidth
              />
            </Grid>

            {/* Billing Address */}
            <Grid item xs={12} md={4}>
              <TextField
                label="Billing Address"
                variant="outlined"
                name="billingAddress.address1"
                value={billingAddress.address1}
                onChange={handleChange}
                fullWidth
              />
            </Grid>

            {/* Salesman */}
            <Grid item xs={12} md={4}>
              <TextField
                label="Salesman Commission Type"
                variant="outlined"
                name="salesman.commissionType"
                value={salesman.commissionType}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
          </Grid>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CustomerForm;
