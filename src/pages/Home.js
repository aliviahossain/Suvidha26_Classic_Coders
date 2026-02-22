import React from 'react';
import { 
  Grid, Card, Typography, Container, Box, 
  Button, AppBar, Toolbar, IconButton, Stack 
} from '@mui/material';
import { 
  FlashOn, WaterDrop, LocalGasStation, Business, 
  Contrast, HeadsetMic, Security, FiberManualRecord 
} from '@mui/icons-material';

// Data for the service pillars as defined in the technical proposal [cite: 70]
const services = [
  { id: 'elec', title: 'ELECTRICITY BILL', sub: 'PROCEED TO BILL PAYMENT', icon: <FlashOn sx={{ fontSize: 40 }} />, color: '#ff9800' },
  { id: 'water', title: 'WATER TAX', sub: 'PROCEED TO BILL PAYMENT', icon: <WaterDrop sx={{ fontSize: 40 }} />, color: '#2196f3' },
  { id: 'gas', title: 'GAS CONNECTION', sub: 'PROCEED TO BILL PAYMENT', icon: <LocalGasStation sx={{ fontSize: 40 }} />, color: '#ff5722' },
  { id: 'property', title: 'PROPERTY TAX', sub: 'PROCEED TO BILL PAYMENT', icon: <Business sx={{ fontSize: 40 }} />, color: '#4caf50' },
];

const Home = () => {
  return (
    <Box sx={{ bgcolor: '#f8fafd', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Top Navigation Bar with Branding and Language Toggle [cite: 24, 165] */}
      <AppBar position="static" sx={{ bgcolor: 'white', color: 'black', boxShadow: 'none', borderBottom: '1px solid #e0e0e0' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Stack direction="row" spacing={2} alignItems="center">
            <Box sx={{ bgcolor: '#1a237e', p: 1, borderRadius: 1 }}>
              <Business sx={{ color: 'white' }} />
            </Box>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 800, color: '#1a237e', letterSpacing: 1 }}>SUVIDHA ONETOUCH</Typography>
              <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600 }}>UNIFIED CIVIC SERVICES PLATFORM • डिजिटल इंडिया</Typography>
            </Box>
          </Stack>

          <Stack direction="row" spacing={1} alignItems="center">
            {['ENGLISH', 'हिंदी', 'मराठी', 'தமிழ்'].map((lang) => (
              <Button 
                key={lang} 
                variant={lang === 'ENGLISH' ? 'contained' : 'text'} 
                sx={{ 
                  borderRadius: 2, 
                  fontSize: '0.75rem', 
                  bgcolor: lang === 'ENGLISH' ? '#1a237e' : 'transparent',
                  color: lang === 'ENGLISH' ? 'white' : 'inherit'
                }}
              >
                {lang}
              </Button>
            ))}
            <IconButton><Contrast /></IconButton>
          </Stack>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        {/* Hero Section with Welcome Message [cite: 99, 100, 101] */}
        <Box sx={{ 
          bgcolor: 'white', p: 5, borderRadius: 6, 
          boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
          mb: 4
        }}>
          <Typography variant="caption" sx={{ display: 'flex', alignItems: 'center', color: '#3f51b5', fontWeight: 'bold', mb: 2 }}>
            <Security sx={{ fontSize: 16, mr: 1 }} /> AZADI KA AMRIT MAHOTSAV
          </Typography>
          
          <Grid container alignItems="center">
            <Grid item xs={12} md={8}>
              <Typography variant="h2" sx={{ fontWeight: 900, color: '#1a237e', mb: 2 }}>
                Welcome to SUVIDHA <br/> OneTouch
              </Typography>
              <Typography variant="body1" sx={{ color: '#5f6368', maxWidth: '500px', lineHeight: 1.6 }}>
                Please select a service to continue. This portal provides 24/7 access to municipal and utility services under the Digital India initiative. [cite: 101]
              </Typography>
            </Grid>
            
            <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Box textAlign="center">
                <Box component="img" 
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/9/95/Digital_India_logo.svg/1200px-Digital_India_logo.svg.png" 
                  sx={{ height: 100 }} 
                />
                <Typography variant="caption" display="block" sx={{ fontWeight: 'bold', mt: 1 }}>POWER TO EMPOWER</Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Service Pillar Grid [cite: 18, 70] */}
        <Grid container spacing={3}>
          {services.map((s) => (
            <Grid item xs={12} sm={6} md={3} key={s.id}>
              <Card sx={{ 
                p: 3, borderRadius: 5, cursor: 'pointer', transition: '0.3s',
                '&:hover': { transform: 'translateY(-8px)', boxShadow: 4 }
              }}>
                <Box sx={{ 
                  bgcolor: s.color + '15', // Hex + transparency
                  width: 56, height: 56, borderRadius: 3, 
                  display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 4, color: s.color 
                }}>
                  {s.icon}
                </Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#3c4043' }}>{s.title}</Typography>
                <Typography variant="caption" sx={{ color: '#70757a', fontWeight: 'bold' }}>{s.sub}</Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Footer Status Bar [cite: 109, 123] */}
      <Box sx={{ mt: 'auto', bgcolor: 'white', p: 1.5, display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #e0e0e0' }}>
        <Stack direction="row" spacing={4} sx={{ ml: 2 }}>
          <Typography variant="caption" sx={{ display: 'flex', alignItems: 'center', color: '#5f6368', fontWeight: 600 }}>
            <FiberManualRecord sx={{ color: '#4caf50', fontSize: 12, mr: 0.5 }} /> KIOSK STATUS: ACTIVE
          </Typography>
          <Typography variant="caption" sx={{ display: 'flex', alignItems: 'center', color: '#5f6368', fontWeight: 600 }}>
            <Security sx={{ fontSize: 14, mr: 0.5 }} /> SECURE CONNECTION [cite: 109]
          </Typography>
        </Stack>

        <Stack direction="row" spacing={3} alignItems="center" sx={{ mr: 2 }}>
          <Box textAlign="right">
            <Typography variant="caption" sx={{ display: 'block', lineHeight: 1, color: '#70757a' }}>SESSION SECURITY TIMEOUT</Typography>
            <Typography variant="subtitle2" sx={{ fontWeight: 900, color: '#1a237e' }}>04:42</Typography>
          </Box>
          <IconButton sx={{ bgcolor: '#f1f3f4' }}><HeadsetMic sx={{ color: '#1a237e' }} /></IconButton>
        </Stack>
      </Box>
    </Box>
  );
};

export default Home;