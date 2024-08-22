// frontend/src/pages/TherapyToolsPage.js
import React, { useState } from 'react';
import { Box, Typography, IconButton, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/NSidebar';
import JournalComponent from '../components/JournalComponent';
import MoodTrackerComponent from '../components/MoodTrackerComponent';

const drawerWidth = 240;

const TherapyToolsPage = () => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const onSelectSession = (session) => {
    // Handle session selection, e.g., navigate to a session detail page or show details in a modal
    console.log('Selected session:', session);
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
        }}
      >
        <Sidebar handleLogout={handleLogout} onSelectSession={onSelectSession} />
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
        }}
        open
      >
        <Sidebar handleLogout={handleLogout} onSelectSession={onSelectSession} />
      </Drawer>
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', marginLeft: { sm: `${drawerWidth}px`, xs: '0' } }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', backgroundColor: '#F4F9F4' }}>
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
            
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton onClick={() => navigate('/home')}>
              <HomeIcon />
            </IconButton>
            <IconButton>
              <NotificationsIcon />
            </IconButton>
            <IconButton onClick={() => navigate('/profile')}>
              <PersonIcon />
            </IconButton>
          </Box>
        </Box>
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#F4F9F4', padding: 3 }}>
          <Typography variant="h4" gutterBottom>Therapy Tools</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, width: '100%' }}>
            <JournalComponent />
            <MoodTrackerComponent />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TherapyToolsPage;
