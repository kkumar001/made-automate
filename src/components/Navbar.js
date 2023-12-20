import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { NavLink } from 'react-router-dom';
import m2a from '../Images/m2a.jpg'
import styled from 'styled-components';


function Navbar() {
    //const [anchorElUser, setAnchorElUser] = React.useState(null);

    //   const handleOpenUserMenu = (event) => {
    //     setAnchorElUser(event.currentTarget);
    //   };


    //   const handleCloseUserMenu = () => {
    //     setAnchorElUser(null);
    //   };

    return (
        <AppBar position="sticky"  sx={{background: '#149bf5'}}>
            <Container maxWidth="xl" >
                <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    {/* <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            M2A
          </Typography> */}
                    <NavLink to='/'>
                        <img src={m2a} width='100px' height='50px' style={{
                            borderRadius: '5px',
                            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
                        }} />
                    </NavLink>
                    <Button
                        key='1'
                        href='/AddProduct'
                        sx={{ my: 2, color: 'white', display: 'block', fontWeight: 700 }}
                    >
                        ADD PRODUCT
                    </Button>
                    <Button
                        key='2'
                        href='/AllOrders'
                        sx={{ my: 2, color: 'white', display: 'block', fontWeight: 700 }}
                    >
                        ALL ORDERS
                    </Button>
                    <Button
                        key='3'
                        href='/ECommerceListing'
                        sx={{ my: 2, color: 'white', display: 'block', fontWeight: 700 }}
                    >
                        E Commerce Listing
                    </Button>
                    {/* <Box sx={{ flexGrow: 1}}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
                    {/* <Box sx={{  gap: 10 }}>
          <Button
                key='1'
                onClick={handleCloseNavMenu}
                href='/AddProduct'
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                ADD PRODUCT
              </Button>
              <Button
                key='2'
                onClick={handleCloseNavMenu}
                href='/AllOrders'
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                ALL ORDERS
              </Button>
          </Box> */}
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navbar;
