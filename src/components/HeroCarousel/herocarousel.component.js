import React from "react";
import HeroSlider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousel = () => {
    const settingsLg = {
        arrows: true,
        autoplay: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "300px",
        infinite: true
    }

    const settings = {
        arrows: true,
        centerMode: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
  };

  const images = [
      "https://images.unsplash.com/photo-1535016120720-40c646be5580?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      "https://images.unsplash.com/photo-1485095329183-d0797cdc5676?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
      "https://images.unsplash.com/photo-1458053688450-eef5d21d43b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1052&q=80",
      "https://images.unsplash.com/photo-1523207911345-32501502db22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
  ]

  return (
      <>
        <div className="lg:hidden">
        <HeroSlider {...settings}>
          {
              images.map((image) => (
                  <div className="w-full h-64 md:h-80 py-3">
                      <img src={image} alt="testing" className="w-full h-full rounded-md"/>
                  </div>
              ))
          }
        </HeroSlider>
        </div>

        <div className="hidden lg:block">
          <HeroSlider {...settingsLg}>
          {
              images.map((image) => (
                  <div className="w-full h-96 px-2 py-3">
                      <img src={image} alt="testing" className="w-full h-full rounded-md"/>
                  </div>
              ))
          }
      </HeroSlider>
        </div>
      </>
  )
}

export default HeroCarousel;