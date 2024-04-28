import React from "react";
import styles from "./RecommendedCard.module.css";
import { Link } from "react-router-dom";

export default function RecommendedCard({ recommendedTour }) {
  return (
    <Link to={`/tour/${recommendedTour.id}/`} key={recommendedTour.id}>
      <div className={styles.recommended_card}>
        <img src={recommendedTour.image} lt={recommendedTour.name} />
        <div className={styles.drecommended_card_title}>
          {recommendedTour.location}
        </div>
      </div>
    </Link>
  );
}
