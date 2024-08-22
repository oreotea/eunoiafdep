// frontend/src/components/TherapyTools.js
import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const TherapyTools = () => (
  <Paper elevation={3} sx={{ padding: 4, backgroundColor: '#D3ECDC' }}>
    <Typography variant="h4" gutterBottom>
      Therapy Tools
    </Typography>
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography>Tool 1</Typography>
      <Typography>Tool 2</Typography>
    </Box>
  </Paper>
);

export default TherapyTools;
