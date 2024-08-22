// frontend/src/pages/TermsPage.js
import React, { useState } from 'react';
import { Container, Button, Box, Typography, Checkbox, FormControlLabel, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { backendAPI as api } from '../api/api';

const terms = [
  "I understand that people vary in their responses to the app. There are no promises of improvement for users of the app.",
  "If I have any suicidal or violent thoughts or urges, I will immediately call 911 and seek help from a mental health professional.",
  "I understand the app does not replace treatment or advice from a healthcare provider.",
  "I understand the app is an automated self-help tool for general wellness. The app does not establish a doctor-patient relationship and does not replace treatment from a healthcare provider. The app is not capable of intervening in an emergency."
];

const TermsPage = () => {
  const [acceptedTerms, setAcceptedTerms] = useState(new Array(terms.length).fill(false));
  const navigate = useNavigate();

  const handleAcceptTerm = (index) => {
    const updatedAcceptedTerms = [...acceptedTerms];
    updatedAcceptedTerms[index] = !updatedAcceptedTerms[index];
    setAcceptedTerms(updatedAcceptedTerms);
  };

  const handleComplete = async () => {
    if (acceptedTerms.every(term => term)) {
      try {
        await api.post('/user/complete-onboarding');
        navigate('/home');
      } catch (error) {
        console.error('Error completing onboarding:', error);
      }
    } else {
      alert('You must accept all terms to continue.');
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Paper elevation={3} sx={{ padding: 4, backgroundColor: '#D3ECDC' }}>
        <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
          Terms of Use
        </Typography>
        <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {terms.map((term, index) => (
            <FormControlLabel
              key={index}
              control={<Checkbox checked={acceptedTerms[index]} onChange={() => handleAcceptTerm(index)} />}
              label={term}
            />
          ))}
          <Button
            variant="contained"
            color="primary"
            onClick={handleComplete}
            disabled={!acceptedTerms.every(term => term)}
            sx={{ mt: 2, backgroundColor: '#4CAF50', '&:hover': { backgroundColor: '#45A049' } }}
          >
            Complete
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default TermsPage;
