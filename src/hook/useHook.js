

import  { useContext } from "react";
import {CreateContext}  from "../pages/MovieList"

export function useHook(){

return useContext(CreateContext)

}