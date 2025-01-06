import React from 'react';
import { Button, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import darkarow from '../../Assets/darkarow.png';
import backgroundImage from '../../Assets/HeroPaginaPrincipal.jpg'; // Make sure to replace this with your actual background image path

const HeroContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  backgroundColor: theme.palette.background.default,
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}));

const HeroText = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  color: theme.palette.common.white,
  textShadow: '1px 1px 4px rgba(0, 0, 0, 0.7)',
  '& h1': {
    fontSize: '3rem',
    fontWeight: 700,
    marginBottom: theme.spacing(2),
  },
  '& p': {
    fontSize: '1.25rem',
    marginBottom: theme.spacing(4),
  },
}));

const HeroButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  padding: '14px 25px',
  fontSize: '16px',
  borderRadius: '30px',
  display: 'inline-flex',
  alignItems: 'center',
  '& img': {
    marginLeft: '10px',
    width: '20px',
  },
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
  },
}));

export const Hero = () => {
  return (
    <HeroContainer>
      <HeroText>
        <Typography variant="h1">Ofrecemos los mejores productos a buen precio</Typography>
        <Typography variant="body1">Somos la mejor tienda para sus artículos de consumo diario</Typography>
        <HeroButton variant="contained">
          Ir a la tienda <img src={darkarow} alt="arrow icon" />
        </HeroButton>
      </HeroText>
    </HeroContainer>
  );
};

export default Hero;
