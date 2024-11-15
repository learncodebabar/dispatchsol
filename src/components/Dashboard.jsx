// Dashboard.js
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
import Content from "./Content"; // Main content component
import Sidebar from "./Sidebar"; // Sidebar Component
import AddCustomerForm from "./CustomerForm"; // Customer form component
import Brightness4Icon from "@mui/icons-material/Brightness4"; // Dark mode icon
import Brightness7Icon from "@mui/icons-material/Brightness7"; // Light mode icon

const Dashboard = ({ darkMode, toggleTheme }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isCreatingNewCustomer, setIsCreatingNewCustomer] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleOpenForm = () => {
    setIsCreatingNewCustomer(true);
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  return (
    <Router>
      <Box sx={{ display: "flex", height: "100vh", overflow: "hidden" }}>
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
          <Toolbar>
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleSidebarToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Dashboard
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <IconButton onClick={toggleTheme} color="inherit">
              {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
            <Button color="inherit" variant="outlined" onClick={handleOpenForm}>
              Create New Customer
            </Button>
          </Toolbar>
        </AppBar>

        <Sidebar isSidebarOpen={isSidebarOpen} handleSidebarToggle={handleSidebarToggle} />

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            transition: "margin-left 0.1s",
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

        <Dialog open={isFormOpen} onClose={handleCloseForm} fullWidth maxWidth="md">
          <DialogTitle>{isCreatingNewCustomer ? "Create New Customer" : "Edit Customer"}</DialogTitle>
          <DialogContent>
            <AddCustomerForm handleClose={handleCloseForm} isCreatingNewCustomer={isCreatingNewCustomer} />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseForm} color="primary">
              Cancel
            </Button>
            <Button onClick={handleCloseForm} color="primary">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Router>
  );
};

export default Dashboard;
