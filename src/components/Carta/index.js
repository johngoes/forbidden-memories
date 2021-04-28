import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import React from 'react';

function Carta ( carta ) {
    return (
        <Card>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt={carta.title}
                    height="360"
                    image={carta.image}
                    title={carta.title}
                />
                <CardContent>
                    <Typography>{carta.title}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default Carta;