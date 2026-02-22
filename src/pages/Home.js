import React from 'react';
import { Grid, Card, Typography, Container, Box } from '@mui/material';
// Updated imports with valid MUI icon names
import { Lightbulb, WaterDrop, LocalGasStation, AccountBalance } from '@mui/icons-material';

const services = [
  { id: 'elec', title: 'ELECTRICITY BILL', icon: <Lightbulb sx={{ fontSize: 60 }} />, color: '#ff9800' }, // [cite: 105]
  { id: 'water', title: 'WATER TAX', icon: <WaterDrop sx={{ fontSize: 60 }} />, color: '#2196f3' }, // [cite: 106]
  { id: 'gas', title: 'GAS CONNECTION', icon: <LocalGasStation sx={{ fontSize: 60 }} />, color: '#f44336' }, // [cite: 107]
  { id: 'property', title: 'PROPERTY TAX', icon: <AccountBalance sx={{ fontSize: 60 }} />, color: '#4caf50' }, // [cite: 108]
];

const Home = () => {
  return (
    <Container maxWidth="lg" sx={{ textAlign: 'center', py: 5 }}>
      {/* Welcome Header [cite: 99, 100] */}
      <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
        Welcome to SUVIDHA OneTouch
      </Typography>
      
      {/* Subtitle Instructions [cite: 101] */}
      <Typography variant="h5" color="textSecondary" sx={{ mb: 5 }}>
        Please select a service to continue. 
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {services.map((service) => (
          <Grid item xs={12} sm={6} md={3} key={service.id}>
            <Card 
              raised 
              sx={{ 
                padding: '40px', 
                cursor: 'pointer', 
                transition: '0.3s',
                '&:hover': { transform: 'scale(1.05)' },
                borderBottom: `8px solid ${service.color}`,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                minHeight: '250px',
                justifyContent: 'center'
              }}
              onClick={() => console.log(`Selected ${service.title}`)}
            >
              <Box sx={{ color: service.color, mb: 2 }}>
                {service.icon}
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                {service.title}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Footer Branding  */}
      <Box sx={{ mt: 8, opacity: 0.7 }}>
        <Typography variant="body1">Digital India</Typography>
        <Typography variant="caption">POWER TO EMPOWER</Typography>
      </Box>
    </Container>
  );
};

export default Home;