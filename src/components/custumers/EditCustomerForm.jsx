import React, { useState, useEffect } from "react";
import { Box, Tabs, Tab, Button } from "@mui/material";
import PrimaryInfo from "./PrimaryInfo";
import CustomerInformation from "./CustomerInformation";
import ManageContacts from "./ManageContacts";
import CheckboxSubmit from "./CheckboxSubmit"; // Import the Checkbox component

const CustomerForm = ({ customerData = null, onSubmit }) => {
  const [tabIndex, setTabIndex] = useState(0);
  const [formData, setFormData] = useState({
    customerName: "",
    address: "",
    country: "",
    city: "",
    email: "",
    phone: "",
  });
  const [isChecked, setIsChecked] = useState(false); // State to manage checkbox status

  useEffect(() => {
    if (customerData) {
      setFormData({
        customerName: customerData.customerName || "",
        address: customerData.address || "",
        country: customerData.country || "",
        city: customerData.city || "",
        email: customerData.email || "",
        phone: customerData.phone || "",
      });
    }
  }, [customerData]);

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked); // Update the checkbox status
  };

  const handleUpdate = () => {
    if (isChecked && onSubmit) {
      onSubmit(formData); // Pass form data to parent component or API
    } else {
      alert("Please check the box to submit the form.");
    }
  };

  return (
    <Box sx={{ width: "100%", p: 3 }}>
      <Tabs value={tabIndex} onChange={handleTabChange}>
        <Tab label="Primary Info" />
        <Tab label="Customer Information" />
        <Tab label="Manage Contacts" />
      </Tabs>

      {tabIndex === 0 && <PrimaryInfo formData={formData} handleChange={handleChange} />}
      {tabIndex === 1 && <CustomerInformation formData={formData} handleChange={handleChange} />}
      {tabIndex === 2 && <ManageContacts />}

      {/* Checkbox for form submission */}
      <CheckboxSubmit isChecked={isChecked} handleCheckboxChange={handleCheckboxChange} />

      <Box mt={3} display="flex" justifyContent="center">
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleUpdate}
        >
          {customerData ? "Update Customer" : "Add New Customer"}
        </Button>
      </Box>
    </Box>
  );
};

export default CustomerForm;
