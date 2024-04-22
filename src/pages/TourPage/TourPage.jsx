import React from "react";
import styles from "./TourPage.module.css";
import Comment from "../../components/Comment/Comment.jsx";

import geo_point from "../../assets/geo_point.svg";

export default function TourPage() {
  return (
    <div className={styles.tourPage}>
      <div className={styles.tour_card}>
        <div className={styles.tour_top}>
          <div className={styles.tour_name}>Mount Fuji</div>
          <div className={styles.tour_location}>
            <img src={geo_point} />
            <p className={styles.tour_location_land}>Honshu, Japan</p>
          </div>
        </div>
        <div className={styles.tour_desc}>
          <h3>Description</h3>
          <p className={styles.tour_desc_text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim
            eget amet viverra eget fames rhoncus. Eget enim venenatis enim porta
            egestas malesuada et. Consequat mauris lacus euismod montes.
          </p>
        </div>
        <div className={styles.tour_comments}>
          <h3>Reviews</h3>
          <Comment />
        </div>
        <div className={styles.tour_bottom}>
          <button>Book now</button>
        </div>
      </div>
    </div>
  );
}
