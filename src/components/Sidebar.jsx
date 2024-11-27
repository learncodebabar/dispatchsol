import React from 'react';
import { Box, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';

const Sidebar = ({ isSidebarOpen, handleSidebarToggle }) => {

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={handleSidebarToggle(false)}
      onKeyDown={handleSidebarToggle(false)}
    >
      <List>
        {['Dashboard', 'Customers', 'Products'].map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemText primary={item} />
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
