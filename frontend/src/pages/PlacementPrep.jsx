import React, { useState } from 'react';
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails, Paper, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const interviewData = [
  {
    category: 'Data Structures',
    questions: [
      { q: 'Explain the difference between an Array and a Linked List.', a: 'Arrays have fixed size and O(1) access; Linked Lists have dynamic size and O(n) access but O(1) insertion.' },
      { q: 'What is a Hash Table?', a: 'A data structure that maps keys to values using a hash function for highly efficient lookups.' }
    ]
  },
  {
    category: 'System Design',
    questions: [
      { q: 'What is Load Balancing?', a: 'The process of distributing network traffic across multiple servers to ensure no single server bears too much load.' },
      { q: 'Explain Horizontal vs Vertical Scaling.', a: 'Horizontal scaling means adding more machines (nodes); Vertical scaling means adding more power (CPU, RAM) to an existing machine.' }
    ]
  },
  {
    category: 'HR / Behavioral',
    questions: [
      { q: 'Tell me about yourself.', a: 'Focus on your academic background, core skills, and passion for engineering.' },
      { q: 'Where do you see yourself in 5 years?', a: 'Discuss your goals for technical growth and professional contribution.' }
    ]
  }
];

const PlacementPrep = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>Placement Prep & Mock Interviews</Typography>
      <Paper sx={{ p: 3, mb: 3, bgcolor: '#fffde7' }}>
        <Typography variant="h6">Quick Tips:</Typography>
        <Typography variant="body2">• Practice coding on LeetCode/GeeksforGeeks.</Typography>
        <Typography variant="body2">• Be ready to explain your final year project in detail.</Typography>
        <Typography variant="body2">• Work on your communication and soft skills.</Typography>
      </Paper>

      {interviewData.map((section, idx) => (
        <Box key={idx} sx={{ mb: 2 }}>
          <Typography variant="h6" sx={{ mb: 1 }}>{section.category}</Typography>
          {section.questions.map((item, qIdx) => (
            <Accordion key={qIdx}>
              <AccordionSummary expandMoreIcon={<ExpandMoreIcon />}>
                <Typography sx={{ fontWeight: 'bold' }}>{item.q}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="textSecondary">{item.a}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      ))}
    </Container>
  );
};

export default PlacementPrep;
