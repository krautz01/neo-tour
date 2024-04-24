import React, { useState } from "react";
import styles from "./TourPage.module.css";
import Comment from "../../components/Comment/Comment.jsx";

import geo_point from "../../assets/geo_point.svg";
import ModalWindow from "../../components/ModalWindow/ModalWindow.jsx";

import GoBack_Arrow from "../../assets/GoBack_Arrow.svg"
import { Link } from "react-router-dom";

export default function TourPage() {
  const [active, setActive] = useState(false);
  return (
    <div className={styles.tourPage}>
      <Link to="/" className={styles.goback_button}>
        <img src={GoBack_Arrow}/> Go back!
      </Link>
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
          <button onClick={() => setActive(true)}>Book now</button>
        </div>
      </div>{" "}
      {active ? <ModalWindow active={active} setActive={setActive} /> : <></>}
    </div>
  );
}
