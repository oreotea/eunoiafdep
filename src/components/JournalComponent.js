// frontend/src/components/JournalComponent.js
import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { backendAPI as api } from '../api/api';

const JournalComponent = () => {
  const [entry, setEntry] = useState('');
  const [entries, setEntries] = useState([]);

  const handleSave = async () => {
    try {
      await api.post('/journal', { entry });
      setEntries([...entries, entry]);
      setEntry('');
    } catch (error) {
      console.error('Error saving journal entry:', error);
    }
  };

  return (
    <Box sx={{ width: '90%', backgroundColor: 'white', padding: 3, borderRadius: 1, boxShadow: 1 }}>
      <Typography variant="h6" gutterBottom>Journal</Typography>
      <TextField
        label="Write your thoughts..."
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
        multiline
        rows={4}
        fullWidth
      />
      <Button variant="contained" color="primary" onClick={handleSave} sx={{ mt: 2 }}>Save</Button>
      <Box sx={{ mt: 2 }}>
        <Typography variant="h6" gutterBottom>Previous Entries</Typography>
        {entries.map((entry, index) => (
          <Typography key={index} variant="body1">{entry}</Typography>
        ))}
      </Box>
    </Box>
  );
};

export default JournalComponent;
