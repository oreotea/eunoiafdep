// frontend/src/components/CallControls.js
import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';
import PauseIcon from '@mui/icons-material/Pause';
import StopIcon from '@mui/icons-material/Stop';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';

const CallControls = ({ startCall, endCall, connected, connecting }) => (
  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
    <IconButton onClick={startCall} disabled={connecting || connected}>
      <MicIcon fontSize="large" sx={{ fontSize: 100 }} />
    </IconButton>
    <Typography variant="body1">Tap to start talking</Typography>
    <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
      <IconButton>
        <PauseIcon fontSize="large" />
      </IconButton>
      <IconButton onClick={endCall}>
        <StopIcon fontSize="large" />
      </IconButton>
      <IconButton>
        <ToggleOnIcon fontSize="large" />
      </IconButton>
    </Box>
  </Box>
);

export default CallControls;
