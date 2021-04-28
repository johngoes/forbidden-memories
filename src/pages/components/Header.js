import React from 'react';

import {
    AppBar,
    Toolbar,
    Typography,
} from '@material-ui/core';

import NavBar from './NavBar';


function Header () {

    return (
        <AppBar position="fixed" style={{ margin: 0 }}>
            <Toolbar>
                <NavBar />
                <Typography>Yu-Gi-OH</Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Header;