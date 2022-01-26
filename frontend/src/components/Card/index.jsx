import React from 'react';
// import Card from '@mui/material/Card';
// import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, Grid, CardMedia, Card } from '@mui/material';
import { Link } from 'react-router-dom';

export default function CardComponent() {

  const vsStyle = {
    fontSize: "150px",
    // justifyContent: "center",
    alignItems: "center",
  }

  return (
    <Grid container direction="row" justifyContent="space-between" alignItems="center">
      <Grid>
        <Card sx={{ maxWidth: 300 }}>
          <CardActionArea>
            <Link to="web">            
              <CardMedia
                component="img"
                height = "300"
                image = "/images/민초.JPG"
              >            
              </CardMedia>            
            </Link>            
          </CardActionArea>
        </Card> 
      </Grid>
      <Grid>
        {/* <Card sx={{ maxWidth: 150 }}>
          <CardMedia
            component="img"
            height = "150"
            image ="/images/vs.png"
          >
          </CardMedia>
        </Card> */}
        <p style={vsStyle}>vs</p>
      </Grid>
      <Grid>
        <Card sx={{ maxWidth: 300 }}>
        <CardActionArea>
          <Link to="web">
          <CardMedia
            component="img"
            height = "300"
            image = "/images/반민초.JPG"
            onClick= {() => {<Link to="web"/>}}
          >
          </CardMedia>
          </Link>
        </CardActionArea>
        </Card>
      </Grid>
      
    </Grid>
  );
}