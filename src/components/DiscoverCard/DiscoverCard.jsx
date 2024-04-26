import React from "react";
import styles from "./DiscoverCard.module.css";
import { Link } from "react-router-dom";

export default function DiscoverCard({tour}) {
  return (
    <Link to={`/tour/${tour.id}/`} key={tour.id}>
      <div className={styles.discover_slider_card}>
        <img src={tour.image} alt={tour.name}/>
        <div className={styles.discover_slider_card_title}>{tour.location}</div>
      </div>
    </Link>
  );
}
