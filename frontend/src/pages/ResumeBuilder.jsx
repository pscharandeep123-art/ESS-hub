import React, { useState, useEffect } from 'react';
import { Container, Typography, TextField, Button, Paper, Box, Grid } from '@mui/material';
import api from '../services/api';

const ResumeBuilder = () => {
  const [content, setContent] = useState({
    summary: '',
    experience: '',
    skills: '',
  });
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    api.get('/resumes/').then(res => {
      if (res.data.content) setContent(res.data.content);
      if (res.data.ai_feedback) setFeedback(res.data.ai_feedback);
    });
  }, []);

  const handleSave = async () => {
    try {
      await api.post('/resumes/', { content });
      alert('Resume saved!');
    } catch (err) {
      alert('Failed to save');
    }
  };

  const getFeedback = async () => {
    try {
      const res = await api.get('/ai/resume-feedback');
      setFeedback(res.data.feedback);
    } catch (err) {
      alert('Failed to get feedback');
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>Resume Builder</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={7}>
          <Paper sx={{ p: 3 }}>
            <TextField
              fullWidth multiline rows={4} label="Professional Summary" margin="normal"
              value={content.summary} onChange={(e) => setContent({...content, summary: e.target.value})}
            />
            <TextField
              fullWidth multiline rows={4} label="Experience" margin="normal"
              value={content.experience} onChange={(e) => setContent({...content, experience: e.target.value})}
            />
            <TextField
              fullWidth label="Skills (comma separated)" margin="normal"
              value={content.skills} onChange={(e) => setContent({...content, skills: e.target.value})}
            />
            <Box sx={{ mt: 2 }}>
              <Button variant="contained" onClick={handleSave} sx={{ mr: 2 }}>Save Resume</Button>
              <Button variant="outlined" onClick={getFeedback}>Get AI Feedback</Button>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={5}>
          <Paper sx={{ p: 3, bgcolor: '#f5f5f5' }}>
            <Typography variant="h6">AI Feedback</Typography>
            <Box sx={{ mt: 2, whiteSpace: 'pre-wrap' }}>
              {feedback || "No feedback yet. Click 'Get AI Feedback' to analyze your resume."}
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ResumeBuilder;
