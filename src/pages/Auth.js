import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const Auth = () => {
  const [step, setStep] = useState(1); // 1: Mobile, 2: OTP

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="70vh">
      <Typography variant="h4">{step === 1 ? "Enter Mobile Number" : "Enter OTP"}</Typography> [cite: 150, 153]
      
      <TextField 
        variant="outlined" 
        margin="normal" 
        fullWidth 
        style={{ maxWidth: '400px' }}
        placeholder={step === 1 ? "99XXXXXXXX" : "123456"}
      />
      
      <Button 
        variant="contained" 
        color="primary" 
        size="large"
        style={{ marginTop: '20px', width: '200px', height: '60px' }}
        onClick={() => setStep(2)}
      >
        {step === 1 ? "Send OTP" : "Verify & Login"} [cite: 154, 155]
      </Button>
    </Box>
  );
};