import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Grid from "@mui/material/Grid";
import { NavLink, useParams } from "react-router-dom";
import {useHook}   from "../hook/useHook"


export function MovieDetails(){


  const {movies}=useHook();
const {id} =useParams();

  const moviesDetails=movies.find((item,index)=>item.id===Number(id))

  if (!moviesDetails) {
    return <Typography>Movie not found</Typography>;
  }

  return (

    <Grid container  sx={{ p:8 ,justifyContent:"center"}}  >

        


    <Grid   size  xs={12}>

    <Card sx={{ maxWidth: 400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
       
          image={moviesDetails.image}
          alt="not found"

          sx={{ height:420,width:400}}
        />
        <CardContent>
          <Typography >
            Name:   {moviesDetails.title}
          </Typography>
          <Typography  sx={{ color: "ButtonBorder" }}>
           Year:   {moviesDetails.Year}
          </Typography>
          <Typography  sx={{ color: "ButtonBorder" }}>
         Released Date:   {moviesDetails.Released}
        </Typography>
        <Typography  sx={{ color: "ButtonBorder" }}>
          Reated:   {moviesDetails.Rated}
        </Typography>
        <Typography  sx={{ color: "ButtonBorder" }}>
        Genre:    {moviesDetails.Genre}
        </Typography>
        <Typography  sx={{ color: "ButtonBorder" }}>
       Movietime:    {moviesDetails.Runtime}
        </Typography>
        </CardContent>
      </CardActionArea>


      <CardActions>
      <NavLink to="/goback">

        <Button size="small" color="primary">
          GoBack
        </Button>
        </NavLink>

      </CardActions>

    </Card>


    </Grid>

    </Grid>

  );
}

