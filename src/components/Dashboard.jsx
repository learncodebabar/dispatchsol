import React, { useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Content from "./Content"; // Your main content component
import Sidebar from "./Sidebar"; // Sidebar Component
import CustomerForm from "./custumers/CustomerForm"; // New customer form component

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false); // State to manage form visibility
  const [isCreatingNewCustomer, setIsCreatingNewCustomer] = useState(false); // State for creating a new customer

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleOpenForm = () => {
    setIsCreatingNewCustomer(true); // Set to true when creating a new customer
    setIsFormOpen(true); // Open the customer form modal
  };

  const handleCloseForm = () => {
    setIsFormOpen(false); // Close the customer form modal
  };

  return (
    <Router>
      <Box sx={{ display: "flex", height: "100vh", overflow: "hidden" }}>
        {/* AppBar (Navbar) */}
        <AppBar
          position="fixed"
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleSidebarToggle} // Toggle sidebar when clicked
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Dashboard
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Button color="inherit" variant="outlined" onClick={handleOpenForm}>
              Create New Customer
            </Button>
          </Toolbar>
        </AppBar>

        {/* Sidebar Component */}
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          handleSidebarToggle={handleSidebarToggle}
        />

        {/* Main Content */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            transition: "margin-left 0.1s",
            marginLeft: isSidebarOpen ? 0 : 0, // When sidebar is hidden on mobile, content takes full width
            width: "100%",
            height: "100vh",
            overflow: "auto",
            maxWidth: "100%",
          }}
        >
          <Toolbar />
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/customers" element={<Content />} />
          </Routes>
        </Box>

        {/* Customer Form Modal */}
        <Dialog
          open={isFormOpen}
          onClose={handleCloseForm}
          fullWidth
          maxWidth="md" // Optional: Can adjust based on how wide you want the dialog
        >
          <DialogTitle>{isCreatingNewCustomer ? "Create New Customer" : "Edit Customer"}</DialogTitle>
          <DialogContent>
            {/* Pass the isCreatingNewCustomer prop to CustomerForm */}
            <CustomerForm
              handleClose={handleCloseForm}
              isCreatingNewCustomer={isCreatingNewCustomer} // Passing the state here
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseForm} color="primary">
              Cancel
            </Button>
            <Button
              onClick={handleCloseForm} // Assuming handleSubmit is handled in CustomerForm
              color="primary"
            >
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Router>
  );
};

export default Dashboard;
