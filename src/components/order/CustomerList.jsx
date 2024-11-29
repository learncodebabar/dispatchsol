import React, { useState, useEffect } from "react";
import { Typography, List, ListItem, ListItemButton, ListItemText, TextField, Paper } from "@mui/material";
import { styled } from '@mui/system';
import { fetchCustomers } from "../../API/customerApi";

const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#3f51b5',
    },
    '&:hover fieldset': {
      borderColor: '#ff4081',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#ff4081',
    },
  },
  '& .MuiInputLabel-root': {
    color: '#3f51b5',
  },
  '&:hover .MuiInputLabel-root': {
    color: '#ff4081',
  },
  '&.Mui-focused .MuiInputLabel-root': {
    color: '#ff4081',
  },
});

const CustomerList = ({ onSelectCustomer }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCustomers = async () => {
      try {
        const customers = await fetchCustomers();
        console.log(customers);
        setData(customers);
      } catch (error) {
        console.error("Failed to fetch customers:", error);
        setError("Failed to load customer data.");
      }
    };

    getCustomers();
  }, []);

  const filteredCustomers = data.filter((customer) =>
    customer.primaryInfo?.customer_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Paper elevation={3} sx={{ padding: "20px", backgroundColor: "#ffffff", borderRadius: "12px" }}>
      <Typography variant="h5" gutterBottom>
        Select a Customer
      </Typography>
      <StyledTextField
        label="Search Customer"
        variant="outlined"
        fullWidth
        margin="normal"
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{ marginBottom: "20px" }}
      />
      {error && (
        <Typography variant="body2" color="error" gutterBottom>
          {error}
        </Typography>
      )}
      <List>
        {filteredCustomers.map((customer) => (
          <ListItem key={customer.id} disablePadding>
            <ListItemButton onClick={() => onSelectCustomer(customer.primaryInfo?.customer_name)} sx={{ borderRadius: "8px", margin: "5px 0" }}>
              <ListItemText 
                primary={customer.primaryInfo?.customer_name} 
                secondary={`ID: ${customer._id}`} 
                primaryTypographyProps={{ fontWeight: "bold", color: "#3f51b5" }}
                secondaryTypographyProps={{ color: "#757575" }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default CustomerList;
