import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import {MovieList } from "./pages/MovieList"
import {ErrorBoundaries}   from "./ErrorBoundaries"
import {MovieDetails }  from "./data/MovieDetails";
import {LandingPage}  from "./landingpage/LandingPage";
import {SearchList}   from "./pages/SearchList";

function App() {


  //here this line navigating based on id total data not by components 
  // <Route    path="/movie/:id"   element={   <MovieDetails    />}/>

  return (
    <div className="App">


<ErrorBoundaries >

<MovieList>
<BrowserRouter>
    
    <Routes>

<Route     path="/"   element={   <LandingPage  />} />

      <Route    path="/movie/:id"   element={   <MovieDetails    />}/>
  


      <Route    path="/goback"   element={   <SearchList    />}/>

    </Routes>
    </BrowserRouter>

    </MovieList>
    </ErrorBoundaries>
    </div>
  );
}

export default App;
