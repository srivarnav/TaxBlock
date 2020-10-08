import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
    height:'100px',
    overflowY: 'hidden'
    
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  paper: {
    padding: theme.spacing(1),
    margin: 'auto',
    maxWidth: 600,
    // width:'100%'
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

export default function SingleLineGridList(props) {
  const classes = useStyles();
  const {data} = props;

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={2}>
        {data.map((tile) => (
          <GridListTile key={"a"} style={{padding:'7px'}}>
            <Paper className={classes.paper} elevation={2}>
              <Grid container spacing={1}>
                <Grid item xs={5}>
                  <img className={classes.img} alt="complex" src={tile.image} />
                </Grid>
                <Grid item xs={7} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography variant="body2" gutterBottom style={{textTransform:"capitalize", fontWeight:"bold"}}>
                        {tile.name}
                      </Typography>
                      <Typography variant="caption" color="textSecondary" style={{whiteSpace:"nowrap"}}>
                        {`${tile.restaurants} restaurants`}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
