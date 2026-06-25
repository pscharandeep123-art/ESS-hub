import React, { useState } from 'react';
import { TextField, Button, Paper, Typography, Container, Box, Alert } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';
import { authService } from '../services/api';

const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    full_name: '',
    password: '',
    branch: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await authService.register(formData);
      alert('Registration successful! Please login.');
      navigate('/login');
    } catch (err) {
      const msg = err.response?.data?.detail || 'Registration failed. Check if backend is running and MongoDB is connected.';
      setError(msg);
    }
  };

  return (
    <Container maxWidth="xs">
      <Box sx={{ mt: 8 }}>
        <Paper sx={{ p: 4 }}>
          <Typography variant="h5" align="center" gutterBottom>Register</Typography>

          {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth label="Full Name" margin="normal"
              value={formData.full_name}
              onChange={(e) => setFormData({...formData, full_name: e.target.value})}
              required
            />
            <TextField
              fullWidth label="Email" margin="normal" type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
            <TextField
              fullWidth label="Branch" margin="normal"
              value={formData.branch}
              onChange={(e) => setFormData({...formData, branch: e.target.value})}
              required
            />
            <TextField
              fullWidth label="Password" type="password" margin="normal"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              required
              inputProps={{ minLength: 6 }}
            />
            <Button fullWidth variant="contained" type="submit" sx={{ mt: 2 }}>
              Register
            </Button>
          </form>
          <Typography sx={{ mt: 2 }} align="center">
            Already have an account? <Link to="/login">Login</Link>
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default Register;
