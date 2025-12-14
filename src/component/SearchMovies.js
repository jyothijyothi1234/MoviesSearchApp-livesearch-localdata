import  Grid  from "@mui/material/Grid";
import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export  function SearchMovies({search,handlerSearch,handlerClear}){

   
    return(

        <Grid  container      >


<Grid    size xs={12}   sx={{width:"100vw",display:"flex",justifyContent:"center"}} >

      <TextField    sx={{width:"40%"}} type="text" variant="outlined"   value={search}  onChange={handlerSearch}  placeholder="Search Movies"   />
      <Button variant="contained"  sx={{margin:"6px 10px",width:"6%",p:1}}  onClick={handlerClear}>Clear</Button>

      </Grid>
        </Grid>

    )
}