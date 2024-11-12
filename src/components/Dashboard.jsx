import React, { useState } from "react";
import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Content from "./Content"; // Main content with table

const drawerWidth = 240;

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <Box sx={{ display: "flex", height: "100vh" }}>
        <AppBar
          position="fixed"
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
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
            <Button color="inherit" variant="outlined">
              Create New Customer
            </Button>
          </Toolbar>
        </AppBar>

        {/* Sidebar with Navigation Links */}
        <Drawer
          variant="temporary"
          open={isSidebarOpen}
          onClose={handleSidebarToggle}
          sx={{
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          <Box p={2} role="presentation">
            <Typography variant="h6">Navigation</Typography>
            <Button
              component={Link}
              to="/"
              onClick={handleSidebarToggle}
              sx={{ display: "block", mt: 2 }}
            >
              Home
            </Button>
            <Button
              component={Link}
              to="/customers"
              onClick={handleSidebarToggle}
              sx={{ display: "block" }}
            >
              Customers
            </Button>
          </Box>
        </Drawer>

        {/* Main Content */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            transition: "margin-left 0.3s",
            marginLeft: isSidebarOpen ? 0 : -drawerWidth,
          }}
        >
          <Toolbar />
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/customers" element={<Content />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
};

export default Dashboard;
