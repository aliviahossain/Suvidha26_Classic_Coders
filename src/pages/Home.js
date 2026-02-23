import React, { useState } from 'react';
import { 
  Grid, Card, Typography, Container, Box, 
  AppBar, Toolbar, IconButton, Stack, Select, MenuItem, FormControl, Button, Menu, Tooltip
} from '@mui/material';
import { 
  FlashOn, WaterDrop, LocalGasStation, Business, 
  Visibility, HeadsetMic, Security, FiberManualRecord, Language,
  KeyboardArrowDown, AutoGraph, Description, 
  Campaign, Assessment, BugReport, SupportAgent, Troubleshoot, QueryStats
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

const Home = ({ toggleColorblind, isColorblind }) => {
  const { t, i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);

  // Dynamic services array that reacts to the isColorblind state
  const services = [
    { 
      id: 'elec', 
      title: 'ELECTRICITY_BILL', 
      sub: 'PROCEED_PAYMENT', 
      icon: <FlashOn sx={{ fontSize: 40 }} />, 
      color: isColorblind ? '#005AB5' : '#ff9800' 
    },
    { 
      id: 'water', 
      title: 'WATER_TAX', 
      sub: 'PROCEED_PAYMENT', 
      icon: <WaterDrop sx={{ fontSize: 40 }} />, 
      color: isColorblind ? '#2196f3' : '#2196f3' // Adjust if specific high-contrast needed
    },
    { 
      id: 'gas', 
      title: 'GAS_CONNECTION', 
      sub: 'PROCEED_PAYMENT', 
      icon: <LocalGasStation sx={{ fontSize: 40 }} />, 
      color: isColorblind ? '#DC3220' : '#ff5722' 
    },
    { 
      id: 'property', 
      title: 'PROPERTY_TAX', 
      sub: 'PROCEED_PAYMENT', 
      icon: <Business sx={{ fontSize: 40 }} />, 
      color: isColorblind ? '#40B0A6' : '#4caf50' 
    },
  ];

  const top10IndianLanguages = [
    { code: 'hi', label: 'हिन्दी (Hindi)' },
    { code: 'bn', label: 'বাংলা (Bengali)' },
    { code: 'mr', label: 'मराठी (Marathi)' },
    { code: 'te', label: 'తెలుగు (Telugu)' },
    { code: 'ta', label: 'தமிழ் (Tamil)' },
    { code: 'gu', label: 'ગુજરાતી (Gujarati)' },
    { code: 'ur', label: 'اردو (Urdu)' },
    { code: 'kn', label: 'ಕನ್ನಡ (Kannada)' },
    { code: 'or', label: 'ଓଡ଼ିଆ (Odia)' },
    { code: 'ml', label: 'മലയാളം (Malayalam)' },
    { code: 'en', label: 'English' }
  ];

  const handleOpen = (event, menu) => {
    setAnchorEl(event.currentTarget);
    setActiveMenu(menu);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setActiveMenu(null);
  };

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', display: 'flex', flexDirection: 'column', transition: '0.3s' }}>
      
      {/* Navigation Header */}
      <AppBar position="static" sx={{ bgcolor: 'background.paper', color: 'text.primary', boxShadow: 'none', borderBottom: '1px solid', borderColor: 'divider' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Stack direction="row" spacing={2} alignItems="center">
            <Box sx={{ bgcolor: '#1a237e', p: 1, borderRadius: 1 }}>
              <Business sx={{ color: 'white' }} />
            </Box>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 800, color: 'primary.main', lineHeight: 1 }}>SUVIDHA ONETOUCH</Typography>
              <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600 }}>{t('UNIFIED_PLATFORM')}</Typography>
            </Box>
          </Stack>

          <Stack direction="row" spacing={1} sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Button color="inherit" endIcon={<KeyboardArrowDown />} onClick={(e) => handleOpen(e, 'civic')}>Civic Services</Button>
            <Button color="inherit" endIcon={<KeyboardArrowDown />} onClick={(e) => handleOpen(e, 'ai')}>AI Tools</Button>
            <Button color="inherit" endIcon={<KeyboardArrowDown />} onClick={(e) => handleOpen(e, 'gov')}>Governance</Button>
          </Stack>

          <Stack direction="row" spacing={2} alignItems="center">
            <FormControl size="small" sx={{ minWidth: 160 }}>
              <Select 
                value={i18n.language || 'en'} 
                onChange={(e) => i18n.changeLanguage(e.target.value)}
                startAdornment={<Language sx={{ mr: 1, fontSize: 18, color: 'primary.main' }} />}
                sx={{ borderRadius: 2, fontWeight: 600 }}
              >
                {top10IndianLanguages.map((lang) => (
                  <MenuItem key={lang.code} value={lang.code}>{lang.label}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <Tooltip title="Toggle Colourblind Mode">
              <IconButton onClick={toggleColorblind} color={isColorblind ? "secondary" : "primary"}>
                <Visibility />
              </IconButton>
            </Tooltip>
          </Stack>
        </Toolbar>
      </AppBar>

      {/* Dropdown Menus */}
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose} PaperProps={{ sx: { minWidth: 280, borderRadius: 3, mt: 1 } }}>
        {activeMenu === 'civic' && [
          <MenuItem key="bill" onClick={handleClose}><FlashOn sx={{ mr: 2 }} /> Billing Services</MenuItem>,
          <MenuItem key="req" onClick={handleClose}><Troubleshoot sx={{ mr: 2 }} /> Service Requests</MenuItem>,
          <MenuItem key="griv" onClick={handleClose}><Campaign sx={{ mr: 2 }} /> Grievance Services</MenuItem>,
          <MenuItem key="notif" onClick={handleClose}><FiberManualRecord sx={{ mr: 2, color: 'success.main' }} /> Notification Service</MenuItem>
        ]}
        {activeMenu === 'ai' && [
          <MenuItem key="conc" onClick={handleClose}><SupportAgent sx={{ mr: 2 }} /> AI Civic Concierge (NLP)</MenuItem>,
          <MenuItem key="fault" onClick={handleClose}><BugReport sx={{ mr: 2 }} /> Visual Fault Detection</MenuItem>,
          <MenuItem key="ocr" onClick={handleClose}><Description sx={{ mr: 2 }} /> Intelligent Document Processing</MenuItem>
        ]}
        {activeMenu === 'gov' && [
          <MenuItem key="admin" onClick={handleClose}><Assessment sx={{ mr: 2 }} /> Admin & Analytics</MenuItem>,
          <MenuItem key="pred" onClick={handleClose}><QueryStats sx={{ mr: 2 }} /> Predictive Analytics</MenuItem>,
          <MenuItem key="route" onClick={handleClose}><AutoGraph sx={{ mr: 2 }} /> Smart Routing</MenuItem>
        ]}
      </Menu>

      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Box sx={{ bgcolor: 'background.paper', p: 5, borderRadius: 6, boxShadow: '0 10px 30px rgba(0,0,0,0.04)', mb: 4 }}>
          <Typography variant="caption" sx={{ display: 'flex', alignItems: 'center', color: 'primary.main', fontWeight: 'bold', mb: 2 }}>
            <Security sx={{ fontSize: 16, mr: 1 }} /> AZADI KA AMRIT MAHOTSAV
          </Typography>
          <Grid container alignItems="center">
            <Grid item xs={12} md={8}>
              <Typography variant="h2" sx={{ fontWeight: 900, color: 'text.primary', mb: 2 }}>{t('WELCOME_TITLE')}</Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: '500px' }}>
                {t('WELCOME_SUBTITLE')}
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
              <Box component="img" src="https://upload.wikimedia.org/wikipedia/en/thumb/9/95/Digital_India_logo.svg/1200px-Digital_India_logo.svg.png" sx={{ height: 100 }} />
              <Typography variant="caption" display="block" sx={{ fontWeight: 'bold' }}>POWER TO EMPOWER</Typography>
            </Grid>
          </Grid>
        </Box>

        <Grid container spacing={3}>
          {services.map((s) => (
            <Grid item xs={12} sm={6} md={3} key={s.id}>
              <Card sx={{ p: 3, borderRadius: 5, cursor: 'pointer', transition: '0.3s', '&:hover': { transform: 'translateY(-8px)', boxShadow: 4 } }}>
                <Box sx={{ bgcolor: `${s.color}20`, width: 56, height: 56, borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 4, color: s.color }}>
                  {s.icon}
                </Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 800 }}>{t(s.title)}</Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 'bold' }}>{t(s.sub)}</Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Status Footer */}
      <Box sx={{ mt: 'auto', bgcolor: 'background.paper', p: 1.5, display: 'flex', justifyContent: 'space-between', borderTop: '1px solid', borderColor: 'divider' }}>
        <Stack direction="row" spacing={4} sx={{ ml: 2 }}>
          <Typography variant="caption" sx={{ display: 'flex', alignItems: 'center', fontWeight: 600 }}><FiberManualRecord sx={{ color: '#4caf50', fontSize: 12, mr: 0.5 }} /> KIOSK STATUS: ACTIVE</Typography>
          <Typography variant="caption" sx={{ display: 'flex', alignItems: 'center', fontWeight: 600 }}><Security sx={{ fontSize: 14, mr: 0.5 }} /> SECURE CONNECTION</Typography>
        </Stack>
        <Stack direction="row" spacing={3} alignItems="center" sx={{ mr: 2 }}>
          <Box textAlign="right">
            <Typography variant="caption" sx={{ display: 'block', lineHeight: 1 }}>SESSION SECURITY TIMEOUT</Typography>
            <Typography variant="subtitle2" sx={{ fontWeight: 900, color: 'primary.main' }}>04:42</Typography>
          </Box>
          <IconButton sx={{ bgcolor: 'action.hover' }}><HeadsetMic sx={{ color: 'primary.main' }} /></IconButton>
        </Stack>
      </Box>
    </Box>
  );
};

export default Home;