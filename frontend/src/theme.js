import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1f3d51', // Custom primary color (orangered)
    },
    secondary: {
      main: '#eae45f', // Custom secondary color (white)
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: 'Inter, Arial, sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 30,
          
        },
      },
    },
  },
});

export default theme;
