import React, { useState,useEffect } from "react";
import  Grid  from "@mui/material/Grid";
import { searchMovies } from "../aips/movieApi";
import { SearchMovies } from "../component/SearchMovies";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { NavLink } from "react-router-dom";
import { useHook } from "../hook/useHook";

export function SearchList() {
  const [search, setSearch] = useState("");
  const [showMovies, setShowMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const { movies } = useHook();

  const handlerSearch = (e) => {
    setSearch(e.target.value);
  };

  const handlerClear = () => {
    setSearch("");
    setShowMovies([])
  };



  useEffect(()=>{

  const handlerShowSearch = async () => {
  
    setLoading(true);

    try {

      //here that search is from api what u r searching in the input field and movie is the type what ever we need what we mention in below line
      const responseData = await searchMovies(search, "movie", 1);


      if (!search.trim()) {
        setShowMovies([]);
        return;
      }


  const apifilter=responseData?.Search?.map((item)=>item.Title.toLowerCase()||[])

  const  dataFiltered=movies.filter((item)=>apifilter.includes(item.title.toLowerCase()))
  setShowMovies(dataFiltered)

    } catch (error) {
      setShowMovies([]);
    }
    finally {
        setLoading(false);
      }


  };

  const clear= setTimeout(()=>{

    handlerShowSearch()
   },500)

  return()=> clearTimeout(clear)
},[search,movies])






// AT BELOW IN RETURN JSX WE CAN USE THIS CODE IF U NEED BUTTON INSTEAD OF USEEFFECT 

//THIS IS SIMPLE I HAVE TRIED THIS LINES 

   //   {showMovies.map((item) => (
    //    <Grid key={item.id}>
     //     <Typography>{item.title}</Typography>
    //    </Grid>
     // ))}  


//WE CAN USE THIS ARE ONLY USEEFFECT WE CAN USE INSTEAD OF BUTTON 
     // <Button variant="contained" onClick={handlerShowSearch}>
     //   Show
     // </Button> 


     // This is used to navigate that images based on id from the browser router and navlink is a router so use style for this not sx
     //          <NavLink to={`/movie/${item.id}`}     style={{ textDecoration: "none" }}>

    

  return (
    <Grid container spacing={2}   >


<Grid size xs={12}   sx={{p:10,backgroundColor:"ButtonShadow"}}    >

<Grid size xs={12}     >

{loading && <Typography   sx={{fontSize:"20px",textAlign:"center",p:5}}>Loading!!!!....</Typography>}
</Grid>




<Grid size xs={12}     >

{!loading && showMovies.length === 0 && search && (
<Typography   sx={{fontSize:"20px",color:"red",textAlign:"center",p:5}}>No movies found</Typography>
)}
</Grid>




<Grid size xs={12}       >

<SearchMovies
        search={search}
        handlerSearch={handlerSearch}
        handlerClear={handlerClear}
      />
              </Grid>

              </Grid>



      

              <Grid size xs={12}    sx={{m:15}}  >

       {showMovies.map((item) => (
        <Grid size xs={12} key={item.id}  >
          
          <NavLink to={`/movie/${item.id}`}     style={{ textDecoration: "none" }}>
            <Card sx={{ maxWidth: 345, p: 4, backgroundColor: "ButtonFace"}}>
              <CardActionArea>

                
                <CardMedia
                  image={item.image}
                  component="img"
                  alt="not found"
                  sx={{
                    height: 400,
                    objectFit: "cover",
                  }}
                />
                <CardContent>
                  <Typography
                    style={{
                      fontSize: "20px",
                      textAlign: "center",
                      color: "blue",
                    }}
                  >
                    {item.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </NavLink>
        </Grid>
      ))}
              </Grid>


</Grid>

  );
}
