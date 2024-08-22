// frontend/src/components/MoodTrackerComponent.js
import React, { useState } from 'react';
import { Box, Button, Typography, Slider } from '@mui/material';
import { backendAPI as api } from '../api/api';

const MoodTrackerComponent = () => {
  const [mood, setMood] = useState(5);

  const handleSave = async () => {
    try {
      await api.post('/mood', { mood });
    } catch (error) {
      console.error('Error saving mood:', error);
    }
  };

  return (
    <Box sx={{ width: '90%', backgroundColor: 'white', padding: 3, borderRadius: 1, boxShadow: 1 }}>
      <Typography variant="h6" gutterBottom>Mood Tracker</Typography>
      <Typography gutterBottom>How are you feeling today?</Typography>
      <Slider
        value={mood}
        onChange={(e, newValue) => setMood(newValue)}
        step={1}
        marks
        min={0}
        max={10}
        valueLabelDisplay="on"
        sx={{ width: '80%', margin: '0 auto' }}
      />
      <Button variant="contained" color="primary" onClick={handleSave} sx={{ mt: 2 }}>Save</Button>
    </Box>
  );
};

export default MoodTrackerComponent;
