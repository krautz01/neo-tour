import React, { useEffect, useState } from "react";
import styles from "./TourPage.module.css";
import Comment from "../../components/Comment/Comment.jsx";

import geo_point from "../../assets/geo_point.svg";
import ModalWindow from "../../components/ModalWindow/ModalWindow.jsx";
import MountFuji from "../../assets/Mount_Fuji.jpeg";

import GoBack_Arrow from "../../assets/GoBack_Arrow.svg";
import { Link, useParams, useSearchParams } from "react-router-dom";
import axios from "axios";

export default function TourPage() {
  const [active, setActive] = useState(false);
  const [tourDatas, setTourDatas] = useState([]);
  const [reviews, setReviews] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchTourDatas = async () => {
      try {
        const response = await axios.get(
          `https://kunasyl-backender.org.kg/api/tours/${id}/`
        );
        setTourDatas(response.data);
        console.log(tourDatas);
      } catch (error) {
        console.log("Error fetching tours details");
      }
    };
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `https://kunasyl-backender.org.kg/api/reviews/${id}/`
        );
        setReviews(response.data);
        console.log(reviews);
      } catch (error) {
        console.log("Error fetching tours details");
      }
    };
    fetchReviews();
    fetchTourDatas();
  }, [id]);

  return (
    <div className={styles.tourPage}>
      <img
        src={tourDatas.image || MountFuji}
        className={styles.tourPage_tourImage}
      />
      <Link to="/" className={styles.goback_button}>
        <img src={GoBack_Arrow} /> Go back!
      </Link>
      <div className={styles.tour_card}>
        <div className={styles.tour_top}>
          <div className={styles.tour_name}>
            {tourDatas.name || "Something"}
          </div>
          <div className={styles.tour_location}>
            <img src={geo_point} />
            <p className={styles.tour_location_land}>
              {tourDatas.location || "Somewhere, Earth"}
            </p>
          </div>
        </div>
        <div className={styles.tour_desc}>
          <h3>Description</h3>
          <p className={styles.tour_desc_text}>
            {tourDatas.description ||
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissimeget amet viverra eget fames rhoncus. Eget enim venenatis enim portaegestas malesuada et. Consequat mauris lacus euismod montes"}
          </p>
        </div>
        <div className={styles.tour_comments}>
          <h3>Reviews</h3>
          <Comment reviews={reviews} />
        </div>
        <div className={styles.tour_bottom}>
          <button onClick={() => setActive(true)}>Book now</button>
        </div>
      </div>
      {active && <ModalWindow active={active} setActive={setActive} />}
    </div>
  );
}
