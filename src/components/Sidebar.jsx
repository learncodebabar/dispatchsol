import React from 'react';
import { Box, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

const Sidebar = ({ isSidebarOpen, handleSidebarToggle }) => {
  const menuItems = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Customers', path: '/customers' },
    { name: 'Products', path: '/products' },
    { name: 'Order', path: '/order' },
  ];

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={handleSidebarToggle(false)}
      onKeyDown={handleSidebarToggle(false)}
    >
      <List>
        {menuItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton component={Link} to={item.path}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Drawer
      anchor="left"
      open={isSidebarOpen}
      onClose={handleSidebarToggle(false)}
    >
      {list()}
    </Drawer>
  );
};

export default Sidebar;
