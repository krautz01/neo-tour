import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import styles from "./HomePage.module.css";
import { Link } from "react-router-dom";

import LetsGo_Arrow from "../../assets/LetsGo_Arrow.svg";
import Winter from "../../assets/Winter.svg";
import Arrow_Left from "../../assets/Arrow_Left.svg";
import Arrow_Right from "../../assets/Arrow_Right.svg";

import DiscoverCard from "../../components/DiscoverCard/DiscoverCard";
import styled from "styled-components";

export default function HomePage() {
  const [tours, setTours] = useState([]);
  const [categories, setCategories] = useState([]);

  const ref = useRef(null);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await axios.get(
          "https://kunasyl-backender.org.kg/api/tours/"
        );
        setTours(response.data);
        console.log(tours);
        console.log(tours.typeof);
      } catch (error) {
        console.log("Error fetching tours");
      }
    };
    fetchTours();
  }, []);

  const handleScroll = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleFetchCategory = () => {};
  return (
    <div className={styles.homePage}>
      <section className={styles.greeting}>
        <div className={styles.greeting_info}>
          <h1>Winter Vacation Trips</h1>
          <div className={styles.greeting_text}>
            Enjoy your winter vacations with warmth and amazing sightseeing on
            the mountains. Enjoy the best experience with us!
          </div>
          <button onClick={handleScroll}>
            Let's Go!
            <img src={LetsGo_Arrow} />
          </button>
        </div>
        <img className={styles.greeting_img} src={Winter} />
      </section>
      <section className={styles.discover_section} ref={ref}>
        <div className={styles.descover_top}>
          <h2>Discover</h2>
          <div className={styles.discover_slider_buttons}>
            <button>
              <img src={Arrow_Left} />
            </button>
            <button>
              <img src={Arrow_Right} />
            </button>
          </div>
        </div>
        <div className={styles.discover_slider}>
          <div className={styles.discover_slider_tab}>
            {tours.map((tour) => (
              <p id={tour.category.id} onClick={handleFetchCategory}>
                {tour.category.name}
              </p>
            ))}
          </div>
          <div className={styles.discover_slider_cards}>
            {tours.map((tour) => (
              <Link to={`/tour/${tour.id}/`} key={tour.id}>
                <div className={styles.discover_slider_card}>
                  <img src={tour.image} />
                  <div className={styles.discover_slider_card_title}>
                    {tour.location}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className={styles.recommended_section}>
        <h2>Recommended</h2>
        <div className={styles.recommended_cards}>
          {/* <div className={styles.recommended_card}>
            <div>Northern Mountains</div>
          </div>
          <div className={styles.recommended_card}>
            <div>Northern Mountains</div>
          </div>
          <div className={styles.recommended_card}>
            <div>Northern Mountains</div>
          </div>
          <div className={styles.recommended_card}>
            <div>Northern Mountains</div>
          </div>
          <div className={styles.recommended_card}>
            <div>Northern Mountains</div>
          </div>
          <div className={styles.recommended_card}>
            <div>Northern Mountains</div>
          </div>
          <div className={styles.recommended_card}>
            <div>Northern Mountains</div>
          </div>
          <div className={styles.recommended_card}>
            <div>Northern Mountains</div>
          </div> */}
        </div>
        <DiscoverCard />
      </section>
    </div>
  );
}
