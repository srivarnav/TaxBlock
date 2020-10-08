import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import {categories} from "../../../data/recipe.json"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color:'#383838',
    fontWeight: 'bold'
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" style={{backgroundColor:'#ffffff', boxShadow:'none'}}>
        <Toolbar>
          <Grid container spacing={1}>
            <Grid item xs={10}>
              <Typography variant="h4" className={classes.title}>
                What would <br/>you like to eat?
              </Typography>
            </Grid>
          </Grid>
          <NotificationsNoneOutlinedIcon style={{color:"#000000"}}/>
        </Toolbar>
      </AppBar>
    </div>
  );
}
