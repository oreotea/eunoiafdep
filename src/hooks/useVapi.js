import { useEffect, useState, useRef } from 'react';
import { backendAPI as api } from '../api/api';
import Vapi from '@vapi-ai/web';

const useVapi = (assistantOptions) => {
  const [connecting, setConnecting] = useState(false);
  const [connected, setConnected] = useState(false);
  const [progress, setProgress] = useState(0);
  const [summaryOpen, setSummaryOpen] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const timerRef = useRef(null);
  const vapi = useRef(new Vapi(process.env.REACT_APP_VAPI_PUBLIC_KEY)).current;

  useEffect(() => {
    console.log('useEffect: Setting up Vapi event listeners');

    const onCallStart = () => {
      console.log('onCallStart: Call started');
      setConnecting(false);
      setConnected(true);
      startProgressBar();
      setStartTime(new Date());
    };

    const onCallEnd = () => {
      console.log('onCallEnd: Call ended');
      setConnecting(false);
      setConnected(false);
      stopProgressBar();
      setEndTime(new Date());
      setSummaryOpen(true);
    };

    const onError = (error) => {
      console.error('onError: Vapi error', error);
      setConnecting(false);
    };

    vapi.on('call-start', onCallStart);
    vapi.on('call-end', onCallEnd);
    vapi.on('error', onError);

    return () => {
      console.log('useEffect cleanup: Removing Vapi event listeners');
      vapi.off('call-start', onCallStart);
      vapi.off('call-end', onCallEnd);
      vapi.off('error', onError);
      stopProgressBar();
    };
  }, [vapi]);

  const startCall = () => {
    console.log('startCall: Starting the call');
    setConnecting(true);
    vapi.start(assistantOptions)
      .then((res) => {
        console.log('startCall: Call started successfully', res);
      })
      .catch((err) => {
        console.error('startCall: Error starting call', err);
      });
  };

  const endCall = async () => {
    console.log('endCall: Ending the call');
    vapi.stop();
    const duration = (new Date() - startTime) / 60000; // Duration in minutes
    const token = localStorage.getItem('token');
    try {
      await api.post('/user/session', { date: startTime, duration }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log('endCall: Session saved successfully');
    } catch (error) {
      console.error('endCall: Error saving session', error);
    }
  };

  const startProgressBar = () => {
    console.log('startProgressBar: Starting progress bar');
    setProgress(0);
    timerRef.current = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + (100 / (30 * 60));
        if (newProgress >= 100) {
          clearInterval(timerRef.current);
          return 100;
        }
        return newProgress;
      });
    }, 1000);
  };

  const stopProgressBar = () => {
    console.log('stopProgressBar: Stopping progress bar');
    clearInterval(timerRef.current);
    setProgress(0);
  };

  const handleCloseSummary = () => {
    console.log('handleCloseSummary: Closing summary dialog');
    setSummaryOpen(false);
  };

  const getDuration = () => {
    if (startTime && endTime) {
      const duration = (endTime - startTime) / 1000;
      const minutes = Math.floor(duration / 60);
      const seconds = Math.floor(duration % 60);
      return `${minutes} minutes and ${seconds} seconds`;
    }
    return '';
  };

  return {
    connecting,
    connected,
    progress,
    summaryOpen,
    startCall,
    endCall,
    handleCloseSummary,
    getDuration,
  };
};

export default useVapi;
