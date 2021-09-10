import { Route } from "react-router-dom";

import DefaultHOC from "./HOC/default.HOC";
import MovieHOC from "./HOC/movie.HOC";

import HomePage from "./pages/home.page";
import Movie from "./pages/movie.page";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <>
      <DefaultHOC path="/" exact component={HomePage}/>
      <MovieHOC path="/movie/:id" exact component={Movie} />
    </>
  );
}

export default App;
