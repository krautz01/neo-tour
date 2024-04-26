import React from "react";
import "./CardSlider.css";
import Flickity from "react-flickity-component";

const flickityOptions = { initialIndex: 2 };

export default function CardSlider() {
  return (
    <div>
      <Flickity
        className="Slider"
        elementType="div"
        disableImagesLoaded={false}
        options={flickityOptions}
        reloadOnUpdate
        static
      >
        <button>ffyyRDD</button>
        <button>ffyyRDD</button>
        <button>ffyyRDD</button>
      </Flickity>
    </div>
  );
}
