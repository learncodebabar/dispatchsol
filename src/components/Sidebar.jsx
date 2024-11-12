import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Custumers from "./Customers";

const Sidebar = ({ isSidebarOpen, handleSidebarToggle }) => {
  return (
    <>
      {/* Sidebar Drawer for Mobile */}
      <Box
        component="nav"
        sx={{
          display: { xs: "block", sm: "none" }, // Show on mobile only
        }}
      >
        <Box
          p={2}
          role="presentation"
          sx={{
            width: 240,
            backgroundColor: "#f4f4f4",
            height: "100%",
          }}
        >
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
            component={Custumers}
            to="/customers"
            onClick={handleSidebarToggle}
            sx={{ display: "block" }}
          >
            Customers
          </Button>
        </Box>
      </Box>

      {/* Sidebar Drawer for Desktop (Permanent) */}
      <Box
        component="nav"
        sx={{
          display: { xs: "none", sm: "block" }, // Hide on mobile
        }}
      >
        <Box
          p={2}
          role="presentation"
          sx={{
            width: 240,
            backgroundColor: "#f4f4f4",
            height: "100%",
          }}
        >
          <Typography variant="h6">Navigation</Typography>
          <Button component={Link} to="/" sx={{ display: "block", mt: 2 }}>
            Home
          </Button>
          <Button component={Link} to="/customers" sx={{ display: "block" }}>
            Customers
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Sidebar;
