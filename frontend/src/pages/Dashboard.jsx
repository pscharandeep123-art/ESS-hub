import React from 'react';
import { Container, Typography, Grid, Paper, Box } from '@mui/material';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        Welcome back, {user?.full_name}!
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8} lg={9}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 240 }}>
            <Typography variant="h6">Your Progress</Typography>
            <Box sx={{ mt: 2 }}>
                <Typography variant="body1">Skill Gap Analysis: 40% complete</Typography>
                <Typography variant="body1">Resume Status: Draft</Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 240 }}>
            <Typography variant="h6">Quick Actions</Typography>
            <Box sx={{ mt: 2 }}>
                <Typography variant="body2">• Update Skills</Typography>
                <Typography variant="body2">• Build Resume</Typography>
                <Typography variant="body2">• Search Internships</Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
