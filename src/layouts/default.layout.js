import React from "react";
import Navbar from "../components/Navbar/navbar.component";
import HeroCarousel from "../components/HeroCarousel/herocarousel.component";

const DefaultLayout = (props) => {
    return (
        <>
        <Navbar />
        <HeroCarousel />
        {props.children}
        </>
    );
};

export default DefaultLayout;
