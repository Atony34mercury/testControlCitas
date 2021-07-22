import React from 'react';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    title: {
        color: '#1BB55C',
        textAlign: 'left'
    },
    subText:{
        color: 'white',
        textAlign: 'left'
    }
});

function Title (){

    const classes = useStyles();

    return(
        <div>
        <Typography variant="h2" className={classes.title} gutterBottom>
            Reserva una cita
        </Typography>
        <Typography variant="body1" className={classes.subText} gutterBottom>
            <strong>Agende una cita con masajes SS PLUS de LUNES a Viernes de 8am a 7pm.
            </strong>
        </Typography>
        </div>
    );
}

export default Title;