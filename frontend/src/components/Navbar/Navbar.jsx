import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, ButtonGroup, Badge, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCart } from '../../Context/ContextoCarrito';
import logo from '../../Assets/logo.png';

const Logo = styled('img')`
  width: 80px; /* Adjust this size as needed */
  margin-right: 20px;
`;

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  borderRadius: '10px',
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
  },
}));

const ToolbarStyled = styled(Toolbar)`
  min-height: 50px; /* Adjust this height as needed */
`;

export const Navbar = () => {
  const { cartCount } = useCart();

  return (
    <AppBar position="fixed" color="default">
      <ToolbarStyled>
        <Logo src={logo} alt="logo" />
        <ButtonGroup variant="outlined" aria-label="Basic button group">
          <StyledButton component={Link} to="/" color='inherit'>
            Página Principal
          </StyledButton>
          <StyledButton component={Link} to="/bebidas" color='inherit'>
            Bebidas
          </StyledButton>
          <StyledButton component={Link} to="/alimentos" color='inherit'>
            Alimentos
          </StyledButton>
        </ButtonGroup>
        <div style={{ flexGrow: 1 }}></div> {/* This will push the cart icon to the right */}
        <IconButton component={Link} to="/cart" color='inherit'>
          <Badge badgeContent={cartCount} color="primary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </ToolbarStyled>
    </AppBar>
  );
};

export default Navbar;
