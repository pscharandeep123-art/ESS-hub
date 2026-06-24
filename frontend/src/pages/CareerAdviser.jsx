import React, { useState } from 'react';
import { Container, Typography, Button, Paper, Box, CircularProgress } from '@mui/material';
import api from '../services/api';

const CareerAdviser = () => {
  const [advice, setAdvice] = useState('');
  const [loading, setLoading] = useState(false);

  const getAdvice = async () => {
    setLoading(true);
    try {
      const res = await api.get('/ai/career-advice');
      setAdvice(res.data.advice);
    } catch (err) {
      alert('Failed to get career advice');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>AI Career Adviser</Typography>
      <Paper sx={{ p: 4, textAlign: 'center' }}>
        <Typography variant="body1" paragraph>
          Get personalized career recommendations based on your branch and current skill set.
        </Typography>
        <Button variant="contained" onClick={getAdvice} disabled={loading} size="large">
          {loading ? <CircularProgress size={24} /> : 'Generate Career Roadmap'}
        </Button>
      </Paper>

      {advice && (
        <Paper sx={{ p: 4, mt: 3, bgcolor: '#f0f7ff' }}>
          <Typography variant="h6" gutterBottom>Your Recommendations</Typography>
          <Box sx={{ whiteSpace: 'pre-wrap', textAlign: 'left' }}>
            {advice}
          </Box>
        </Paper>
      )}
    </Container>
  );
};

export default CareerAdviser;
