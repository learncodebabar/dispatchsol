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
import Content from "./Content"; // Your main content component

const drawerWidth = 240;

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <Box sx={{ display: "flex", height: "100vh", overflow: "hidden" }}>
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

        {/* Sidebar Drawer (Mobile - temporary) */}
        <Drawer
          variant="temporary"
          open={isSidebarOpen}
          onClose={handleSidebarToggle}
          sx={{
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
            display: { xs: "block", sm: "none" }, // Show on mobile only
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

        {/* Sidebar Drawer (Large Screens - permanent) */}
        <Drawer
          variant="permanent"
          sx={{
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
            display: { xs: "none", sm: "block" }, // Hide on mobile
          }}
        >
          <Box p={2} role="presentation">
            <Typography variant="h6">Navigation</Typography>
            <Button component={Link} to="/" sx={{ display: "block", mt: 2 }}>
              Home
            </Button>
            <Button component={Link} to="/customers" sx={{ display: "block" }}>
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
            marginLeft: isSidebarOpen ? 0 : 0, // No content toggle, always use full width
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
      </Box>
    </Router>
  );
};

export default Dashboard;
