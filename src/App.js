import { Route } from "react-router-dom";
import axios from "axios";

import DefaultHOC from "./HOC/default.HOC";
import MovieHOC from "./HOC/movie.HOC";

import HomePage from "./pages/home.page";
import Movie from "./pages/movie.page";
import Plays from "./pages/plays.page";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;


function App() {
  return (
    <>
      <DefaultHOC path="/" exact component={HomePage} />
      <MovieHOC path="/movie/:id" exact component={Movie} />
      <DefaultHOC path="/plays" exact component={Plays} />
    </>
  );
}

export default App;
