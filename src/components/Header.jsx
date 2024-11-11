// Header.js
import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, InputBase, Button } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
          Dashboard
        </Typography>
        <InputBase
          placeholder="Search…"
          startAdornment={<SearchIcon />}
          sx={{ backgroundColor: 'white', padding: '0 10px', borderRadius: '4px', marginRight: 2 }}
        />
        <Button variant="contained" color="success">
          Create New Customer
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
