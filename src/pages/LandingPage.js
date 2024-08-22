//frontend/src/pages/LandingPage.js
import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';  // Removed Grid from import
import { motion } from 'framer-motion';

const LandingPage = () => {
  return (
    <Container maxWidth="lg" sx={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f4f8' }}>
      <Box sx={{ width: '100%', textAlign: 'center', marginBottom: '2rem' }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#2c3e50' }}>Welcome to Eunoia</Typography>
        <Typography variant="h6" sx={{ color: '#34495e', margin: '1rem 0' }}>
          Your partner in mental health and well-being. Discover tools and resources to help you manage stress, anxiety, and other mental health challenges.
        </Typography>
      </Box>
      
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button
          variant="contained"
          sx={{ backgroundColor: '#2ecc71', color: 'white', padding: '10px 20px', fontSize: '1rem', borderRadius: '50px' }}
          href="/login"
        >
          Launch Application
        </Button>
      </motion.div>
      
      <Box sx={{ position: 'absolute', bottom: 0, width: '100%', display: 'flex', justifyContent: 'space-between', padding: '1rem', backgroundColor: '#ecf0f1' }}>
        <Typography variant="body2" sx={{ color: '#7f8c8d' }}>© 2024 Eunoia, All Rights Reserved.</Typography>
        <Box>
          <Button href="#" sx={{ color: '#7f8c8d', marginRight: '1rem' }}>About Us</Button>
          <Button href="#" sx={{ color: '#7f8c8d' }}>Privacy Policy</Button>
        </Box>
      </Box>
    </Container>
  );
};

export default LandingPage;
