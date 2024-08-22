// frontend/src/components/Sidebar.js
import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, ListItemIcon, Divider } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;

const Sidebar = ({ handleLogout }) => {
  const navigate = useNavigate();

  return (
    <Box sx={{ width: drawerWidth, backgroundColor: '#D3ECDC', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <Box>
        <Typography variant="h6" sx={{ fontWeight: 'bold', padding: '1rem', color: 'black', textAlign: 'center' }}>
          Eunoia
        </Typography>
        <Divider />
        <List>
          <ListItem button onClick={() => navigate('/therapy-tools')}>
            <ListItemText primary="Therapy Tools" sx={{ color: 'black' }} />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Sessions History" sx={{ color: 'black' }} />
          </ListItem>
        </List>
      </Box>
      <Box>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon><SettingsIcon /></ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
          <ListItem button onClick={handleLogout}>
            <ListItemIcon><LogoutIcon /></ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
