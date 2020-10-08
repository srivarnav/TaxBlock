import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function ComplexGrid(props) {
  const classes = useStyles();
  const {data} = props;
  return (
    <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid item xs={3}>
            <Paper elevation={1}>
              <img className={classes.img} alt="complex" src={data.icon} />
            </Paper>
            {/* </ButtonBase> */}
          </Grid>
          <Grid item xs={7} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="h5" style={{textTransform:"capitalize", fontWeight:"bold"}}>
                  {data.name}
                </Typography>
                <Rating name="size-small" defaultValue={data.rating} size="small" style={{color: '#4884EE'}} />
                <Typography variant="caption" style={{ cursor: 'pointer' }}>
                  ({(`${data.reviewsCount} reviews`)})
                </Typography>
              </Grid> 
            </Grid>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="subtitle1" align="right" style={{color:'#4884EE'}}>$19.00</Typography>
            <Typography variant="caption" style={{whiteSpace:"nowrap"}}>Min order</Typography>
          </Grid>
        </Grid>
    </div>
  );
}
