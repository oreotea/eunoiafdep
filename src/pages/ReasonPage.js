// frontend/src/pages/ReasonPage.js
import React, { useState } from 'react';
import { Container, TextField, Button, Box, Typography, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { backendAPI as api } from '../api/api';

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
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Paper elevation={3} sx={{ padding: 4, backgroundColor: '#D3ECDC' }}>
        <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
          What brings you to Eunoia?
        </Typography>
        <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            label="Reason"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            multiline
            rows={4}
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

export default ReasonPage;
