import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Use `useNavigate` for `react-router-dom` v6
import { ContextoAutorizacion } from '../../Context/ContextoAutorizacion'; // Correct import path
import axios from 'axios';
import {
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Paper,
  Box,
  Grid,
  Typography,
  Container
} from '@mui/material';

const Login = () => {
  const [correo_electronico, setCorreoElectronico] = useState('');
  const [contrasena_usuario, setContrasenaUsuario] = useState('');
  const [error, setError] = useState(null);
  const { setUsuarios } = useContext(ContextoAutorizacion); // Use `setUsuarios` from the context
  const navigate = useNavigate(); // Use `useNavigate`

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const respuesta = await axios.post('http://localhost:3000/autorizacion/login', [{ correo_electronico, contrasena_usuario }]);
      const usuario = respuesta.data;
      console.log(usuario);
      setUsuarios(usuario); // Update context with user data
      navigate(usuario.id_role === 2 ? '/operador' : '/home');
    } catch (error) {
      setError('Contraseña invalida');
    }
  };

  return (
    <Container component="main" maxWidth="lg">
      <Box sx={{ marginTop: 8 }}>
        <Grid container>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: "url(http://localhost:3000/autorizacion/imagenes/vegetales.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="correo_electronico"
                  label="Correo Electrónico"
                  name="correo_electronico"
                  autoComplete="email"
                  autoFocus
                  value={correo_electronico}
                  onChange={(e) => setCorreoElectronico(e.target.value)}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="contrasena_usuario"
                  label="Contraseña"
                  type="password"
                  id="contrasena_usuario"
                  autoComplete="current-password"
                  value={contrasena_usuario}
                  onChange={(e) => setContrasenaUsuario(e.target.value)}
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
                {error && <Typography color="error">{error}</Typography>}
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="#" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Login;
