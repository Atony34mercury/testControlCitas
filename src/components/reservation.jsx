import React from 'react';
import Title from './reservationPage/title';
import Formulario from './reservationPage/formulario';

import Grid from '@material-ui/core/Grid';

function Reservation (){
    return(
        <Grid container 
            direction="row"
            justifyContent="center"
            alignItems="center" 
            spacing={10}
            className={'reservation'}>
            <Grid item xs={12} md={4}>
                <Formulario/>
            </Grid>
            <Grid item xs={12} md={6}>
                <Title/>
            </Grid>
        </Grid>
    );
}

export default Reservation;