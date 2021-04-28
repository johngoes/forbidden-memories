import { Button, List, ListItem, ListItemIcon, ListItemText, makeStyles, SwipeableDrawer } from '@material-ui/core';
import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import ViewCarouselIcon from '@material-ui/icons/ViewCarousel';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    drawer: {
        width: 260
    }
});

const items = [
    { title: "Início", to: "/", icon: <HomeIcon /> },
    { title: "Gerenciar Cards", to: "/admin/cards", icon: <ViewCarouselIcon /> },
    { title: "Gerenciar Tipos", to: "/admin/cards/tipos", icon: <ViewCarouselIcon /> }
];

function NavBar () {

    const styles = useStyles();
    const [state, setState] = React.useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState(open);
    };
    console.log(items);

    return (
        <React.Fragment>
            <Button onClick={toggleDrawer(true)}><MenuIcon /></Button>
            <SwipeableDrawer
                open={state}
                onOpen={toggleDrawer(true)}
                onClose={toggleDrawer(false)}
            >
                <div className={styles.drawer}>
                    <List>
                        {items.map((item) => (
                            <ListItem button component={Link} to={item.to} onClick={toggleDrawer(false)}>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.title} />
                            </ListItem>
                        ))}
                    </List>
                </div>
            </SwipeableDrawer>
        </React.Fragment>
    );
}

export default NavBar;