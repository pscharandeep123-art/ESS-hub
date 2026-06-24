import React, { useState } from 'react';
import { TextField, Button, Paper, Typography, Container, Box } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';
import { authService } from '../services/api';

const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    full_name: '',
    password: '',
    branch: '',
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await authService.register(formData);
      alert('Registration successful! Please login.');
      navigate('/login');
    } catch (err) {
      alert('Registration failed');
    }
  };

  return (
    <Container maxWidth="xs">
      <Box sx={{ mt: 8 }}>
        <Paper sx={{ p: 4 }}>
          <Typography variant="h5" align="center" gutterBottom>Register</Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth label="Full Name" margin="normal"
              value={formData.full_name}
              onChange={(e) => setFormData({...formData, full_name: e.target.value})}
            />
            <TextField
              fullWidth label="Email" margin="normal"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
            <TextField
              fullWidth label="Branch" margin="normal"
              value={formData.branch}
              onChange={(e) => setFormData({...formData, branch: e.target.value})}
            />
            <TextField
              fullWidth label="Password" type="password" margin="normal"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
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
