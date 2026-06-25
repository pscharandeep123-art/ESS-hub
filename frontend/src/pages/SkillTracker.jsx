import React, { useState, useEffect } from 'react';
import { Container, Typography, TextField, Button, Paper, Box, List, ListItem, ListItemText, IconButton, Slider, Grid } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import api from '../services/api';

const SkillTracker = () => {
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState({ name: '', level: 3 });

  useEffect(() => {
    api.get('/users/profile').then(res => {
      if (res.data.skills) setSkills(res.data.skills);
    });
  }, []);

  const handleAddSkill = async () => {
    if (!newSkill.name) return;
    const updatedSkills = [...skills, newSkill];
    try {
      await api.put('/users/profile', { skills: updatedSkills });
      setSkills(updatedSkills);
      setNewSkill({ name: '', level: 3 });
    } catch (err) {
      alert('Failed to update skills');
    }
  };

  const handleDeleteSkill = async (index) => {
    const updatedSkills = skills.filter((_, i) => i !== index);
    try {
      await api.put('/users/profile', { skills: updatedSkills });
      setSkills(updatedSkills);
    } catch (err) {
      alert('Failed to delete skill');
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>Skill Tracker</Typography>
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6">Add New Skill</Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={5}>
            <TextField
              fullWidth label="Skill Name (e.g., Python, React)"
              value={newSkill.name} onChange={(e) => setNewSkill({...newSkill, name: e.target.value})}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography gutterBottom>Proficiency Level: {newSkill.level}</Typography>
            <Slider
              value={newSkill.level} min={1} max={5} step={1}
              onChange={(_, val) => setNewSkill({...newSkill, level: val})}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <Button fullWidth variant="contained" onClick={handleAddSkill}>Add Skill</Button>
          </Grid>
        </Grid>
      </Paper>

      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>My Skills</Typography>
        <List>
          {skills.map((skill, index) => (
            <ListItem
              key={index}
              secondaryAction={
                <IconButton edge="end" onClick={() => handleDeleteSkill(index)}>
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemText
                primary={skill.name}
                secondary={`Level: ${skill.level}/5`}
              />
            </ListItem>
          ))}
          {skills.length === 0 && <Typography color="textSecondary">No skills added yet.</Typography>}
        </List>
      </Paper>
    </Container>
  );
};

export default SkillTracker;
