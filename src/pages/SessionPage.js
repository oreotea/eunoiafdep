// frontend/src/pages/SessionPage.js
import React, { useState } from 'react';
import { Container, Box, IconButton, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/SessionNav';
import CallControls from '../components/CallControls';
import ProgressBar from '../components/ProgressBar';
import SummaryDialog from '../components/SummaryDialog';
// import ChatComponent from '../components/ChatComponent';
import useVapi from '../hooks/useVapi';

const assistantOptions = process.env.REACT_APP_ASSISTANT_KEY;

const SessionPage = () => {
  const navigate = useNavigate();
  const [mode, setMode] = useState('call');
  const {
    connecting,
    connected,
    progress,
    summaryOpen,
    startCall,
    endCall,
    handleCloseSummary,
    getDuration,
  } = useVapi(assistantOptions);

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: '100vh',
        textAlign: 'center',
        backgroundColor: '#D3ECDC',
        padding: '20px',
        width: '100%',
      }}
    >
      <Navbar />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          width: '100%',
          mb: 2,
        }}
      >
        <IconButton edge="end" color="inherit" aria-label="close" onClick={() => navigate('/home')}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 2 }}>
        <Button variant={mode === 'call' ? 'contained' : 'outlined'} onClick={() => setMode('call')}>
          Call
        </Button>
        {/* <Button variant={mode === 'chat' ? 'contained' : 'outlined'} onClick={() => setMode('chat')}>
          Chat
        </Button> */}
      </Box>
      {mode === 'call' ? (
        <>
          <CallControls startCall={startCall} endCall={endCall} connecting={connecting} connected={connected} />
          <ProgressBar progress={progress} />
          <SummaryDialog open={summaryOpen} onClose={handleCloseSummary} duration={getDuration()} />
        </>
      ) : (
        // <ChatComponent />
        null
      )}
    </Container>
  );
};

export default SessionPage;
