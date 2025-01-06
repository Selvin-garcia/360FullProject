import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import { styled } from '@mui/system';

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  padding: theme.spacing(2),
  position: 'relative',
  bottom: 0,
  width: '100%',
  textAlign: 'center',
  boxShadow: '0 -2px 5px rgba(0, 0, 0, 0.1)'
}));

const Footer = () => {
  return (
    <FooterContainer>
        <Typography variant="body1">
        Direccion: Avenida Reforma 12-80 Zona 10 Guatemala
      </Typography>
      <Typography variant="body1">
        Contacto: 534534232
      </Typography>
      <Typography variant="body2" color="textSecondary">
        © 2025 Mi Tiendita online. Todos los derechos reservados.
      </Typography>
    </FooterContainer>
  );
};

export default Footer;
