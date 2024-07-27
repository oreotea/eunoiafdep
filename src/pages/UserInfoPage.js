import React, { useState, useEffect } from 'react';
import { Container, TextField, Button, Box, Typography, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import api from '../api/api';

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
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>Welcome! Tell us about yourself</Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField label="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} fullWidth />
        <TextField label="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} fullWidth />
        <TextField
          select
          label="Gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          fullWidth
        >
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
          <MenuItem value="other">Other</MenuItem>
          <MenuItem value="prefer_not_to_say">Prefer not to say</MenuItem>
        </TextField>
        <TextField label="Age" value={age} onChange={(e) => setAge(e.target.value)} fullWidth />
        <Button variant="contained" color="primary" onClick={handleContinue}>Continue</Button>
      </Box>
    </Container>
  );
};

export default UserInfoPage;
