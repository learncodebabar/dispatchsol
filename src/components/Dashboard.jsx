// Dashboard.js
import React, { useState } from 'react';
import { Box, CssBaseline, IconButton } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Content from './Content';
import Customers from './Customers';
import Settings from './Settings';
import { Menu as MenuIcon, ChevronLeft as ChevronLeftIcon } from '@mui/icons-material';
import Sidebar from './Sidebar';
import Header from './Header';

const sidebarWidth = 280;

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Router>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        
        {/* Sidebar Component */}
        <Sidebar open={sidebarOpen} />
        
        {/* Floating Toggle Button */}
        <IconButton
          onClick={toggleSidebar}
          sx={{
            position: 'fixed',
            top: 20,
            left: sidebarOpen ? `${sidebarWidth + 10}px` : '10px',
            zIndex: 1300, // Above other elements
            backgroundColor: 'white',
            border: '1px solid #ddd',
          }}
        >
          {sidebarOpen ? <ChevronLeftIcon /> : <MenuIcon />}
        </IconButton>
        
        {/* Main Content Area */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            width: sidebarOpen ? `calc(100% - ${sidebarWidth}px)` : '100%',
            transition: 'width 0.3s ease',
            marginLeft: sidebarOpen ? `${sidebarWidth}px` : '0',
            padding: 3,
          }}
        >
          <Header />
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
};

export default Dashboard;
