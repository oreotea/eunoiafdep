// frontend/src/components/Profile.js
import React, { useState, useEffect } from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { backendAPI as api } from '../api/api';

const Profile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await api.get('/user/profile');
        setProfile(response.data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    fetchProfile();
  }, []);

  if (!profile) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Paper elevation={3} sx={{ padding: 4, backgroundColor: '#D3ECDC' }}>
      <Typography variant="h4" gutterBottom>
        Profile
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Typography variant="h6">Name: {profile.firstName} {profile.lastName}</Typography>
        <Typography variant="h6">Age: {profile.age}</Typography>
        <Typography variant="h6">Gender: {profile.gender}</Typography>
        <Typography variant="h6">Reason: {profile.reason}</Typography>
      </Box>
    </Paper>
  );
};

export default Profile;
