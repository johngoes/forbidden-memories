import React from 'react';
import Container from '@material-ui/core/Container';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(ygo => ({
    logo: {
        maxWidth: '160px'
    }
}))

function Home () {

    const classes = useStyles();

    return <div>
        <img 
            alt="Yu-Gi-Oh"
            src={process.env.PUBLIC_URL + "/images/logo.png"} 
            className={classes.logo} 
        />
    </div>;
}

export default Home;