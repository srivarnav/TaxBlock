import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import CardSubContent from "./CardSubContent/CardSubContent";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginBottom:'20px'
  },
  tags:{
    whiteSpace:"nowrap", 
    color:'#383838'
  }
});

export default function ImgMediaCard(props) {
  const classes = useStyles();
  console.log(props);
  const {data} = props;

  return (
    (data)?data.map((el=>{
      return (
        <Card className={classes.root} key={el.name}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image={el.image}
              title="Contemplative Reptile"
            />
          </CardActionArea>
          <CardContent>
            <CardSubContent data={el}/>
            </CardContent >
          <CardActions>
            {
              (data)?el.tags.map((element)=>{
                return (
                  <Button size="small" variant="contained" disabled className={classes.tags} style={{color:'#383838'}}>
                    {element}
                  </Button>)
              }):""
            }
          </CardActions>
        </Card>
      )
    })):""
  );
}
