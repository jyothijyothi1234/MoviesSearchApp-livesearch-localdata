import axios from "axios";

import {API_URL,API_KEY}  from "../aips/baseurl";




export const searchMovies = async (searchTerm,type="") =>{


    try{

        //THIS BELOW CODE IS ALSO FINE BUT PARAMS WILL LOOK NEAT FOR PROFESSIONAL

// const response= await  axios.get(`${API_URL}?s=${searchTerm}&type=${type}&api_key=${API_KEY}`)


const response=await axios.get(API_URL,{

    params:{

        apikey: API_KEY,
        s: searchTerm,
        type: type

    }
})
return response.data
    }catch(error){

console.log("Error while fetching the movie data",error)
return []
    }


}


export const movieDetails =  async (id) => {


    try{

        // const response=await axios.get(`${API_URL}?i=${id}&api_key=${API_KEY}`)

        const response=await axios.get(API_URL,{

            params:{
            i:id,
            apikey: API_KEY
            }
        })
return response.data

    }catch(error){

        console.log("Error while fetching the movie data",error)

        return []
    }
}