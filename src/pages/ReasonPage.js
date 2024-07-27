import React, { useState } from 'react';
import { Container, TextField, Button, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import api from '../api/api';

const ReasonPage = () => {
  const [reason, setReason] = useState('');
  const navigate = useNavigate();

  const handleContinue = async () => {
    try {
      await api.post('/user/reason', { reason });
      navigate('/terms');
    } catch (error) {
      console.error('Error saving reason:', error);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>What brings you to Eunoia?</Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label="Reason"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          multiline
          rows={4}
          fullWidth
        />
        <Button variant="contained" color="primary" onClick={handleContinue}>Continue</Button>
      </Box>
    </Container>
  );
};

export default ReasonPage;
