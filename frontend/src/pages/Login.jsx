import React, { useState } from 'react';
import { TextField, Button, Paper, Typography, Container, Box } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';
import { authService } from '../services/api';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await authService.login(email, password);
      await login(data.access_token);
      navigate('/');
    } catch (err) {
      alert('Login failed');
    }
  };

  return (
    <Container maxWidth="xs">
      <Box sx={{ mt: 8 }}>
        <Paper sx={{ p: 4 }}>
          <Typography variant="h5" align="center" gutterBottom>Login</Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth label="Email" margin="normal"
              value={email} onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              fullWidth label="Password" type="password" margin="normal"
              value={password} onChange={(e) => setPassword(e.target.value)}
            />
            <Button fullWidth variant="contained" type="submit" sx={{ mt: 2 }}>
              Login
            </Button>
          </form>
          <Typography sx={{ mt: 2 }} align="center">
            Don't have an account? <Link to="/register">Register</Link>
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default Login;
