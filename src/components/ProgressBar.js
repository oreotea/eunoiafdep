// frontend/src/components/ProgressBar.js
import React from 'react';
import { Box, LinearProgress } from '@mui/material';

const ProgressBar = ({ progress }) => (
  <Box sx={{ width: '100%', mt: 4 }}>
    <LinearProgress variant="determinate" value={progress} />
  </Box>
);

export default ProgressBar;
