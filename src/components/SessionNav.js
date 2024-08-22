// frontend/src/components/Navbar.js
import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = ({ handleDrawerToggle }) => (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: '1rem',
        backgroundColor: '#D3ECDC',
      }}
    >
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ display: { sm: 'none' } }}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" sx={{ flexGrow: 1, paddingLeft: 2 }}>
        Eunoia
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <IconButton><HomeIcon /></IconButton>
        <IconButton><NotificationsIcon /></IconButton>
        <IconButton><PersonIcon /></IconButton>
      </Box>
    </Box>
  );
  
  export default Navbar;