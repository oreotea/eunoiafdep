import React, { useState } from 'react';
import { Container, Box, Typography, Button, TextField, Divider, IconButton, Grid } from '@mui/material';
import { Google as GoogleIcon, Apple as AppleIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import api from '../api/api';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      if (password !== confirmPassword) {
        setError("Passwords do not match");
        return;
      }
      const response = await api.post('/auth/register', { email, password });
      localStorage.setItem('token', response.data.token);
      navigate('/userinfo');
    } catch (error) {
      setError(error.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <Container maxWidth="lg" sx={{ minHeight: '100vh', display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
      <Box
        sx={{
          flex: 1,
          backgroundColor: '#D3ECDC',
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: { xs: 'center', md: 'flex-start' },
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '2rem' }}>Eunoia</Typography>
        <Typography variant="h6" sx={{ marginBottom: '1rem' }}>Join Us!</Typography>
        <Typography variant="body1">Sign up to start your journey</Typography>
      </Box>

      <Box
        sx={{
          flex: 1,
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box sx={{ maxWidth: 400, width: '100%' }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '1rem' }}>
            Sign Up
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <IconButton>
                <GoogleIcon fontSize="large" />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton>
                <AppleIcon fontSize="large" />
              </IconButton>
            </Grid>
          </Grid>
          <Divider sx={{ margin: '1rem 0' }}>or</Divider>
          <TextField
            fullWidth
            label="Email address"
            variant="outlined"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            fullWidth
            label="Password"
            variant="outlined"
            type="password"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            fullWidth
            label="Confirm Password"
            variant="outlined"
            type="password"
            margin="normal"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {error && <Typography color="error" sx={{ marginTop: '1rem' }}>{error}</Typography>}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ marginTop: '1rem', padding: '10px' }}
              onClick={handleSignup}
            >
              Sign Up
            </Button>
          </motion.div>
          <Typography
            variant="body2"
            sx={{ textAlign: 'center', marginTop: '1rem', cursor: 'pointer', color: 'blue' }}
            onClick={() => navigate('/login')}
          >
            Already have an account? Log In
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default SignupPage;
