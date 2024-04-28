import React from "react";
import "./CardSlider.css";
import Flickity from "react-flickity-component";
import DiscoverCard from "../DiscoverCard/DiscoverCard.jsx";

const flickityOptions = { initialIndex: 2 };

export default function CardSlider({ sortedTours }) {
  console.log(sortedTours);
  return (
    <>
      {/* <Flickity
        className="Slider"
        elementType="div"
        disableImagesLoaded={false}
        options={flickityOptions}
        reloadOnUpdate
        static
      >
      {sortedTours &&
        sortedTours.map((tour) => <DiscoverCard tour={tour} key={tour.id} />)}
      </Flickity> */}
    </>
  );
}
