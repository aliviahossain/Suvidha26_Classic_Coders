import React from 'react';
import { 
  Grid, Card, Typography, Container, Box, 
  AppBar, Toolbar, IconButton, Stack, Select, MenuItem, FormControl 
} from '@mui/material';
import { 
  FlashOn, WaterDrop, LocalGasStation, Business, 
  Contrast, HeadsetMic, Security, FiberManualRecord, Language 
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

const services = [
  { id: 'elec', title: 'ELECTRICITY_BILL', sub: 'PROCEED_PAYMENT', icon: <FlashOn sx={{ fontSize: 40 }} />, color: '#ff9800' },
  { id: 'water', title: 'WATER_TAX', sub: 'PROCEED_PAYMENT', icon: <WaterDrop sx={{ fontSize: 40 }} />, color: '#2196f3' },
  { id: 'gas', title: 'GAS_CONNECTION', sub: 'PROCEED_PAYMENT', icon: <LocalGasStation sx={{ fontSize: 40 }} />, color: '#ff5722' },
  { id: 'property', title: 'PROPERTY_TAX', sub: 'PROCEED_PAYMENT', icon: <Business sx={{ fontSize: 40 }} />, color: '#4caf50' },
];

// List of major Indian languages for the dropdown
const indianLanguages = [
  { code: 'en', label: 'English' },
  { code: 'hi', label: 'हिन्दी (Hindi)' },
  { code: 'mr', label: 'मराठी (Marathi)' },
  { code: 'bn', label: 'বাংলা (Bengali)' },
  { code: 'ta', label: 'தமிழ் (Tamil)' },
  { code: 'te', label: 'తెలుగు (Telugu)' },
  { code: 'gu', label: 'ગુજરાતી (Gujarati)' },
  { code: 'kn', label: 'ಕನ್ನಡ (Kannada)' },
  { code: 'ml', label: 'മലയാളം (Malayalam)' },
  { code: 'pa', label: 'ਪੰਜਾਬੀ (Punjabi)' }
];

const Home = ({ toggleTheme }) => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', display: 'flex', flexDirection: 'column', transition: '0.3s' }}>
      
      <AppBar position="static" sx={{ bgcolor: 'background.paper', color: 'text.primary', boxShadow: 'none', borderBottom: '1px solid', borderColor: 'divider' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Stack direction="row" spacing={2} alignItems="center">
            <Box sx={{ bgcolor: '#1a237e', p: 1, borderRadius: 1 }}>
              <Business sx={{ color: 'white' }} />
            </Box>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 800, color: 'primary.main', letterSpacing: 1 }}>SUVIDHA ONETOUCH</Typography>
              <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600 }}>{t('UNIFIED_PLATFORM')} • डिजिटल इंडिया</Typography>
            </Box>
          </Stack>

          <Stack direction="row" spacing={2} alignItems="center">
            {/* Language Dropdown Selector */}
            <FormControl size="small" sx={{ minWidth: 150 }}>
              <Select
                value={i18n.language || 'en'}
                onChange={handleLanguageChange}
                displayEmpty
                startAdornment={<Language sx={{ mr: 1, fontSize: 20, color: 'primary.main' }} />}
                sx={{ borderRadius: 2, fontSize: '0.875rem', fontWeight: 600 }}
              >
                {indianLanguages.map((lang) => (
                  <MenuItem key={lang.code} value={lang.code}>
                    {lang.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <IconButton onClick={toggleTheme} sx={{ ml: 1 }}>
              <Contrast />
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Box sx={{ bgcolor: 'background.paper', p: 5, borderRadius: 6, boxShadow: '0 10px 30px rgba(0,0,0,0.04)', mb: 4 }}>
          <Typography variant="caption" sx={{ display: 'flex', alignItems: 'center', color: 'primary.main', fontWeight: 'bold', mb: 2 }}>
            <Security sx={{ fontSize: 16, mr: 1 }} /> AZADI KA AMRIT MAHOTSAV
          </Typography>
          
          <Grid container alignItems="center">
            <Grid item xs={12} md={8}>
              <Typography variant="h2" sx={{ fontWeight: 900, color: 'text.primary', mb: 2 }}>
                {t('WELCOME_TITLE')}
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: '500px', lineHeight: 1.6 }}>
                {t('WELCOME_SUBTITLE')}
              </Typography>
            </Grid>
            
            <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center', mt: { xs: 4, md: 0 } }}>
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

        <Grid container spacing={3}>
          {services.map((s) => (
            <Grid item xs={12} sm={6} md={3} key={s.id}>
              <Card sx={{ 
                p: 3, borderRadius: 5, cursor: 'pointer', transition: '0.3s', bgcolor: 'background.paper',
                '&:hover': { transform: 'translateY(-8px)', boxShadow: 4 }
              }}>
                <Box sx={{ 
                  bgcolor: `${s.color}20`, width: 56, height: 56, borderRadius: 3, 
                  display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 4, color: s.color 
                }}>
                  {s.icon}
                </Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 800, color: 'text.primary' }}>{t(s.title)}</Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 'bold' }}>{t(s.sub)}</Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Box sx={{ mt: 'auto', bgcolor: 'background.paper', p: 1.5, display: 'flex', justifyContent: 'space-between', borderTop: '1px solid', borderColor: 'divider' }}>
        <Stack direction="row" spacing={4} sx={{ ml: 2 }}>
          <Typography variant="caption" sx={{ display: 'flex', alignItems: 'center', color: 'text.secondary', fontWeight: 600 }}>
            <FiberManualRecord sx={{ color: '#4caf50', fontSize: 12, mr: 0.5 }} /> KIOSK STATUS: ACTIVE
          </Typography>
          <Typography variant="caption" sx={{ display: 'flex', alignItems: 'center', color: 'text.secondary', fontWeight: 600 }}>
            <Security sx={{ fontSize: 14, mr: 0.5 }} /> SECURE CONNECTION
          </Typography>
        </Stack>

        <Stack direction="row" spacing={3} alignItems="center" sx={{ mr: 2 }}>
          <Box textAlign="right">
            <Typography variant="caption" sx={{ display: 'block', lineHeight: 1, color: 'text.secondary' }}>SESSION SECURITY TIMEOUT</Typography>
            <Typography variant="subtitle2" sx={{ fontWeight: 900, color: 'primary.main' }}>04:42</Typography>
          </Box>
          <IconButton sx={{ bgcolor: 'action.hover' }}><HeadsetMic sx={{ color: 'primary.main' }} /></IconButton>
        </Stack>
      </Box>
    </Box>
  );
};

export default Home;