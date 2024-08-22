// frontend/src/pages/UserInfoPage.js
import React, { useState, useEffect } from 'react';
import { Container, TextField, Button, Box, Typography, MenuItem, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { backendAPI as api } from '../api/api';

const UserInfoPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await api.get('/user/profile');
        if (response.data.onboardingComplete) {
          navigate('/home');
        }
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    fetchProfile();
  }, [navigate]);

  const handleContinue = async () => {
    try {
      await api.post('/user/info', { firstName, lastName, gender, age });
      navigate('/reason');
    } catch (error) {
      console.error('Error saving user info:', error);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Paper elevation={3} sx={{ padding: 4, backgroundColor: '#D3ECDC' }}>
        <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
          Welcome! Tell us about yourself
        </Typography>
        <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            label="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            fullWidth
            variant="outlined"
          />
          <TextField
            label="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            fullWidth
            variant="outlined"
          />
          <TextField
            select
            label="Gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            fullWidth
            variant="outlined"
          >
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
            <MenuItem value="other">Other</MenuItem>
            <MenuItem value="prefer_not_to_say">Prefer not to say</MenuItem>
          </TextField>
          <TextField
            label="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            fullWidth
            variant="outlined"
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleContinue}
            sx={{ mt: 2, backgroundColor: '#4CAF50', '&:hover': { backgroundColor: '#45A049' } }}
          >
            Continue
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default UserInfoPage;
