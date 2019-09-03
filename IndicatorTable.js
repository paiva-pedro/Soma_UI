import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Paper, Grid } from '@material-ui/core';
import Cart from '../images/cart.png';


const useStyles = makeStyles({
    boxPrincipal: {
        width: '600px',
        height: '600px',
        background: '#fff',
        borderRadius: '0px',
    },
    boxTitle: {
        display: 'flex',
        width: '100%',
        height: '60px',
        alignItems: 'center',
        backgroundColor: '#FFA100 ',
        '& img': {
            width: '40px',
            height: '40px',
            marginLeft: '10px',
        },
        '& p': {
            color: '#fff',
            fontSize: '25px',
            fontWeight: '700',
            fontFamily: 'Bebas Neus sans-serif',
            textTransform: 'uppercase',
            paddingLeft: '10px',
            marginTop: '5px',
        }    
    },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <div>
        <Paper className={classes.boxPrincipal}>
            <Grid className={classes.boxTitle} container>
                <img src={props.icon? props.icon : Cart}></img>
                <Typography>{props.title? props.title : "Titulo"}</Typography>
            </Grid>
        </Paper>
    </div> 
  );
}