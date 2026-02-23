import React, { useState } from 'react';
import { Container, Typography, TextField, Button, MenuItem, Box, Paper, Stack } from '@mui/material';
import { Campaign, Send, ArrowBack } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const categories = [
  { value: 'water', label: 'Water Supply / Leakage' },
  { id: 'waste', label: 'Waste Management / Garbage' },
  { id: 'roads', label: 'Roads & Street Lights' },
  { id: 'other', label: 'Other Municipal Issues' },
];

const Grievance = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ category: '', description: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Complaint Registered:", formData);
    // This is where Smart Routing would eventually categorize and forward the complaint
    alert("Grievance Registered Successfully! ID: SU-2026-X102");
    navigate('/');
  };

  return (
    <Container maxWidth="md" sx={{ mt: 5, mb: 5 }}>
      <Button startIcon={<ArrowBack />} onClick={() => navigate('/')} sx={{ mb: 2 }}>
        Back to Home
      </Button>
      
      <Paper elevation={3} sx={{ p: 4, borderRadius: 4 }}>
        <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
          <Campaign color="primary" sx={{ fontSize: 40 }} />
          <Typography variant="h4" fontWeight="bold">Register a Grievance</Typography>
        </Stack>

        <form onSubmit={handleSubmit}>
          <TextField
            select
            fullWidth
            label="Issue Category"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            sx={{ mb: 3 }}
            required
          >
            {categories.map((option) => (
              <MenuItem key={option.id || option.value} value={option.id || option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            fullWidth
            multiline
            rows={4}
            label="Describe your complaint"
            placeholder="Tell us more about the issue..."
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            sx={{ mb: 4 }}
            required
          />

          <Button 
            type="submit" 
            variant="contained" 
            size="large" 
            fullWidth 
            startIcon={<Send />}
            sx={{ borderRadius: 2, py: 1.5, fontWeight: 'bold' }}
          >
            Submit Complaint
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Grievance;