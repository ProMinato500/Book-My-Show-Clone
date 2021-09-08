import React from "react";
import Slider from "react-slick";

import Poster from "../poster/poster.component";

export const Premier = () => {
    const settings = {
        infinite: true,
        autoplay: false,
        slidesToShow: 5,
        slidesToScroll: 2,
        InitialSlide: 0
    };

    const PremierImages = [
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTElICAyM2sgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00122566-bgabnepvfd-portrait.jpg",
            alt: "Shang-Chi and the Legend of the Ten Rings",
            title: "Shang-Chi and the Legend of the Ten Rings",
            subtitle: "Action/Adventure/Fantasy"
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTElICAyM2sgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00122566-bgabnepvfd-portrait.jpg",
            alt: "Shang-Chi and the Legend of the Ten Rings",
            title: "Shang-Chi and the Legend of the Ten Rings",
            subtitle: "Action/Adventure/Fantasy"
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTElICAyM2sgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00122566-bgabnepvfd-portrait.jpg",
            alt: "Shang-Chi and the Legend of the Ten Rings",
            title: "Shang-Chi and the Legend of the Ten Rings",
            subtitle: "Action/Adventure/Fantasy"
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTElICAyM2sgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00122566-bgabnepvfd-portrait.jpg",
            alt: "Shang-Chi and the Legend of the Ten Rings",
            title: "Shang-Chi and the Legend of the Ten Rings",
            subtitle: "Action/Adventure/Fantasy"
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTElICAyM2sgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00122566-bgabnepvfd-portrait.jpg",
            alt: "Shang-Chi and the Legend of the Ten Rings",
            title: "Shang-Chi and the Legend of the Ten Rings",
            subtitle: "Action/Adventure/Fantasy"
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTElICAyM2sgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00122566-bgabnepvfd-portrait.jpg",
            alt: "Shang-Chi and the Legend of the Ten Rings",
            title: "Shang-Chi and the Legend of the Ten Rings",
            subtitle: "Action/Adventure/Fantasy"
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTElICAyM2sgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00122566-bgabnepvfd-portrait.jpg",
            alt: "Shang-Chi and the Legend of the Ten Rings",
            title: "Shang-Chi and the Legend of the Ten Rings",
            subtitle: "Action/Adventure/Fantasy"
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTElICAyM2sgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00122566-bgabnepvfd-portrait.jpg",
            alt: "Shang-Chi and the Legend of the Ten Rings",
            title: "Shang-Chi and the Legend of the Ten Rings",
            subtitle: "Action/Adventure/Fantasy"
        }
    ]

    return (
    <>
    <Slider {...settings}>
        {PremierImages.map((image)=> (
            <Poster {...image} />
        ))}
    </Slider>
    </>
    );

};

export default Premier;