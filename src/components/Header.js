import React, { useState } from 'react'
import { AppBar, Button, Tab, Tabs, Toolbar, Typography } from '@mui/material'
// import logo from '../asset/AME chain Logo.png'
import SwapCallsIcon from '@mui/icons-material/SwapCalls';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

const Header = () => {
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
      }));
      
      const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }));  

      const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
          padding: theme.spacing(1, 1, 1, 0),
          // vertical padding + font size from searchIcon
          paddingLeft: `calc(1em + ${theme.spacing(4)})`,
          transition: theme.transitions.create('width'),
          width: '100%',
          [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
              width: '20ch',
            },
          },
        },
      }));

      const [value, setvalue] = useState();
  return (
    <React.Fragment>

        <AppBar sx={{background: '#fb6930'}}>
          <Toolbar>
            {/* <div >     */}
            {/* <Typography>Shopping</Typography> */}
            {/* <div>
            <img src={logo} style={{width:'90 px'}}/>
            </div>
            </div> */}
            <SwapCallsIcon/>
            <Tabs  
            textColor='white' 
            value={value} 
            onChange={(e,value) => setvalue(value)}
            indicatorColor='secondary'>
              <Tab label='Swap'/>
              <Tab label='Tokens'/>
              <Tab label='NFTs'/>
              <Tab label='Pool'/>
            </Tabs>
            <Search >
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                />
            </Search>
            <Button variant='contained' sx={{background:'black', marginLeft:'auto'}}> Connect wallet </Button>
          </Toolbar>
        </AppBar>

    </React.Fragment>
  )
}

export default Header