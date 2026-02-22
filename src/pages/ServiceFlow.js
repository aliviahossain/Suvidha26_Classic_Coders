import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Button, Box } from '@mui/material';

const steps = ['Enter Details', 'Upload Documents', 'Review & Pay'];

const ServiceFlow = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <Box sx={{ width: '100%', padding: '40px' }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}><StepLabel>{label}</StepLabel></Step>
        ))}
      </Stepper>
      
      <Box sx={{ mt: 10, textAlign: 'center', minHeight: '300px' }}>
        {/* Dynamic content goes here based on activeStep */}
        <Typography variant="h5">Step {activeStep + 1} Content</Typography> [cite: 71]
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', pt: 2 }}>
        <Button disabled={activeStep === 0} onClick={() => setActiveStep(prev => prev - 1)}>Back</Button> [cite: 71]
        <Button variant="contained" onClick={() => setActiveStep(prev => prev + 1)}>
          {activeStep === steps.length - 1 ? 'Finish' : 'Next'} [cite: 71]
        </Button>
      </Box>
    </Box>
  );
};