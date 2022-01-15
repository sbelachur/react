import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CartWidget from '../CartWidget/CartWidget';
import { Badge } from '@mui/material';
import { classes } from 'istanbul-lib-coverage';

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}>
            Tienda Fundación Luna
          </IconButton>
          <Button color="inherit">Inicio </Button>
          <div className={classes.grow} />
          <Button color="inherit">Carrito
          <Badge badgeContent={2} color="secondary">
          <CartWidget /> 
          </Badge> 
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
