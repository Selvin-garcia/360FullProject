import * as React from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled, useTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 300,
  height: 200,
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}));

export default function Variants() {
  const theme = useTheme(); // Acceder al tema directamente

  return (
    <Stack direction="row" spacing={2}>
      <DemoPaper variant="elevation">
        <LocalDrinkIcon color="primary" sx={{ fontSize: theme.spacing(5) }} /> {/* Usar tema para fontSize */}
        <Typography variant="h6" component="div">
          Bebidas
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Refrescos, jugos y más.
        </Typography>
      </DemoPaper>
      <DemoPaper variant="outlined">
        <FastfoodIcon color="secondary" sx={{ fontSize: theme.spacing(5) }} /> {/* Usar tema para fontSize */}
        <Typography variant="h6" component="div">
          Alimentos
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Productos frescos y enlatados.
        </Typography>
      </DemoPaper>
      <DemoPaper variant="elevation">
        <CleaningServicesIcon color="primary" sx={{ fontSize: theme.spacing(5) }} /> {/* Usar tema para fontSize */}
        <Typography variant="h6" component="div">
          Limpieza
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Todo para la limpieza del hogar.
        </Typography>
      </DemoPaper>
      <DemoPaper variant="outlined">
        <SelfImprovementIcon color="secondary" sx={{ fontSize: theme.spacing(5) }} /> {/* Usar tema para fontSize */}
        <Typography variant="h6" component="div">
          Cuidado Personal
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Productos de higiene y belleza.
        </Typography>
      </DemoPaper>
    </Stack>
  );
}
