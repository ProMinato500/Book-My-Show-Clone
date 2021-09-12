import React from "react";
import HeroSlider from "react-slick";

import { NextArrow, PrevArrow } from "./Arrows.component";

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
        infinite: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    }

    const settings = {
        arrows: true,
        centerMode: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
  };

  const images = [
      "https://in.bmscdn.com/nmcms/media-mobile-winter-fest-noon-fiesta-2018-11-28-t-18-0-39.jpeg",
      "https://in.bmscdn.com/content-buzz/2021/02/buzz-stream-01.jpg",
      "https://s01.sgp1.cdn.digitaloceanspaces.com/article/154384-kqixclgtvj-1612506550.jpg",
      "https://in.bmscdn.com/content-buzz/2021/03/tamilmoviesonbookmyshowstream1200x630.jpg",
      "https://in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-my-singapore-connect-0-2020-11-21-t-20-55-54.jpg"
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