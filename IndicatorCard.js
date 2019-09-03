import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    width: '300px',
    height: '140px', 
  },
  area: {
    width: '100%',
    height:'140px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  CardContent:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  boxIcon: {
    display: 'flex',
    width: '100px',
    //background: 'aliceblue',
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    display:'flex',
    width: '80px',
    alignItems: 'center',
  },
  boxText: {
    display: 'block',
    width: '200px',
    //background: 'green',
    //height: '80px',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
      fontSize: '45px',
      fontFamily: "Bebas Neus, sans-serif",
      fontWeight: '700',
      textAlign: 'center',
  },
  subtitle: {
    fontWeight: '700',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea className={classes.area}>
        <CardContent className={classes.boxIcon}>
          <img className={classes.icon} src={props.icon? props.icon : null} />
        </CardContent>

        <CardContent className={classes.boxText}>
          <Typography className={classes.title} variant="h5" component="h2">
            {props.title ? props.title : "Titulo"}
          </Typography>
          <Typography className={classes.subtitle} variant="body2" color="textSecondary" component="p">
            {props.subtitle? props.subtitle : "subtitle"}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}