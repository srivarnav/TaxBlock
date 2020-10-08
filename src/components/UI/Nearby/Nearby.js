import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
  },
  popular:{
    fontWeight:'bold'
  },
  nearbyCount:{
    float:'right',
    color: '#4884EE'
  }
});

export default function Nearby(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={4} >
        <Grid item xs={8}>
          <Typography variant="h6" gutterBottom className={classes.popular} >
            Popular Restaurent
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="subtitle2" gutterBottom className={classes.nearbyCount}>
            {props.data} nearby
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
