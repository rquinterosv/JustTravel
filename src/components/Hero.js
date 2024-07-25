import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { styled } from '@mui/system';
import heroBg from '../img/hero-bg.jpg';

const HeroContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '90vh',
  backgroundImage: `url(${heroBg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: '#fff',
});

const HeroContent = styled(Box)({
  zIndex: 1,
  position: 'relative',
  padding: '20px',
  borderRadius: '10px',
  textAlign: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.7)', // Fondo opaco para mejor legibilidad
  '@media (min-width: 960px)': {
    textAlign: 'center',
  },
});

const HeroTypography = styled(Typography)({
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', // Sombra de texto para resaltar
});

const HeroSection = () => {
  return (
    <HeroContainer>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12} md={6}></Grid>
          <Grid item xs={12} md={6} display="flex" alignItems="center" justifyContent="center">
            <HeroContent>
              <HeroTypography variant="h2" component="h1" gutterBottom>
                Welcome to Our Website
              </HeroTypography>
              <HeroTypography variant="h5" component="p" gutterBottom>
                We provide the best solutions for your business needs.
              </HeroTypography>
              <Button variant="contained" color="primary" size="large">
                Get Started
              </Button>
            </HeroContent>
          </Grid>
        </Grid>
      </Container>
    </HeroContainer>
  );
};

export default HeroSection;
