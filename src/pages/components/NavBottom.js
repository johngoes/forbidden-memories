import React from 'react';
import {
    BottomNavigation,
    BottomNavigationAction
} from '@material-ui/core';
import CategoryIcon from '@material-ui/icons/Category';

function NavBottom () {
    return (
        <BottomNavigation>
            <BottomNavigationAction label="Types" value="types" icon={<CategoryIcon />} />
        </BottomNavigation>
    )
}

export default NavBottom;