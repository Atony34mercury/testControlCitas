import React, {useState} from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import DateFnsUtils from '@date-io/date-fns';
import {
  DatePicker,
  TimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

const useStyles = makeStyles({
    paper: {
        margin:'10px',
        padding:'15px'
    },
});

function Formulario (){
    const classes = useStyles();

    const [selectedDate, handleDateChange] = useState(new Date());


    return(
        <Paper className={classes.paper}>
            <form>
                <Typography variant="h3" gutterBottom>
                    Formulario
                </Typography>

                <TextField
                id="nombre"
                label="Nombre Completo"
                variant="outlined"
                />

                <TextField
                id="direccion"
                label="Dirección"
                variant="outlined"
                />
                
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker value={selectedDate} onChange={handleDateChange} />
                <TimePicker value={selectedDate} onChange={handleDateChange} />
                </MuiPickersUtilsProvider>
                
            </form>
        </Paper>    
    );
}

export default Formulario;