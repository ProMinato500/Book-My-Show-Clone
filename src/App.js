import { Route } from "react-router-dom";

import DefaultHOC from "./HOC/default.HOC";

import HomePage from "./pages/home.page";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <>
       <DefaultHOC path="/" exact component={HomePage}/>
    </>
  );
}

export default App;
