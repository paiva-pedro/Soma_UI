import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Paper, Grid } from '@material-ui/core';
import Cart from '../images/cart.png';
import ExpansionPanel from './ExpansionPanel';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles({
    boxPrincipal: {
        width: '600px',
        height: '580px',
        background: '#fff',
        borderRadius: '0px',
        overflow: 'hidden',
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
    boxIndicator: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%',
        margin: '20px auto',
        '& p': {
            fontSize: '30px',
            fontWeight: '900',
        }
    },
    button: {
        backgroundColor: '#ffa100',
        color: '#fff',
        width: '180px',
        height: '40px',
        textTransform: 'uppercase',
        fontSize: '18px',
        fontWeight: '700',
        '&:hover': {
            backgroundColor: '#FF650D'
        }
    }
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <div>
        <Paper xs={12} className={classes.boxPrincipal}>
            <Grid className={classes.boxTitle} container>
                <img src={props.icon? props.icon : Cart}></img>
                <Typography>{props.title? props.title : "Titulo"}</Typography>
            </Grid>

            <Grid className={classes.boxIndicator} container>
                <Typography>1</Typography>
                <ExpansionPanel/>
            </Grid>
            <Grid className={classes.boxIndicator} container>
                <Typography>2</Typography>
                <ExpansionPanel/>
            </Grid>
            <Grid className={classes.boxIndicator} container>
                <Typography>3</Typography>
                <ExpansionPanel/>
            </Grid>
            <Grid className={classes.boxIndicator} container>
                <Typography>4</Typography>
                <ExpansionPanel/>
            </Grid>
            <Grid className={classes.boxIndicator} container>
                <Typography>5</Typography>
                <ExpansionPanel/>
            </Grid>

            <Button variant="contained" className={classes.button}>Ver todos</Button>
        </Paper>
    </div> 
  );
}
