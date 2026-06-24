import React, { useState } from 'react';
import { Container, Typography, TextField, Grid, Card, CardContent, CardActions, Button, Box } from '@mui/material';

const mockInternships = [
  { id: 1, title: 'Software Engineering Intern', company: 'Tech Corp', location: 'Remote', tags: 'Python, React' },
  { id: 2, title: 'Data Analyst Intern', company: 'Data Insights', location: 'New York', tags: 'SQL, Python' },
  { id: 3, title: 'Web Developer Intern', company: 'Creative Web', location: 'San Francisco', tags: 'JavaScript, CSS' },
];

const InternshipFinder = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = mockInternships.filter(i =>
    i.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    i.tags.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>Internship Finder</Typography>
      <TextField
        fullWidth label="Search by title or skills..." margin="normal"
        value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Grid container spacing={3} sx={{ mt: 2 }}>
        {filtered.map(job => (
          <Grid item xs={12} key={job.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{job.title}</Typography>
                <Typography color="textSecondary">{job.company} • {job.location}</Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>Tags: {job.tags}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" variant="contained">Apply Now</Button>
                <Button size="small">Save for later</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default InternshipFinder;
