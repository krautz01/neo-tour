import React, { useEffect } from "react";
import styles from "./HomePage.module.css";

import LetsGo_Arrow from "../../assets/LetsGo_Arrow.svg";
import Winter from "../../assets/Winter.svg";
import Arrow_Left from "../../assets/Arrow_Left.svg";
import Arrow_Right from "../../assets/Arrow_Right.svg";

import axios from "axios";

import DiscoverCard from "../../components/DiscoverCard/DiscoverCard";
import { Link } from "react-router-dom";

export default function HomePage() {
  useEffect(() => {
    const fetchMeal = async () => {
      try {
        const response = await axios.get(
          "https://kunasyl-backender.org.kg/api/tours/"
        );
        console.log(response);
      } catch (error) {
        console.log("Error fetching meal details:");
      }
    };

    fetchMeal();
  });
  return (
    <div className={styles.homePage}>
      <section className={styles.greeting}>
        <div className={styles.greeting_info}>
          <h1>Winter Vacation Trips</h1>
          <div className={styles.greeting_text}>
            Enjoy your winter vacations with warmth and amazing sightseeing on
            the mountains. Enjoy the best experience with us!
          </div>
          <button>
            Let's Go!
            <img src={LetsGo_Arrow} />
          </button>
        </div>
        <img className={styles.greeting_img} src={Winter} />
      </section>
      <section className={styles.discover_section}>
        <div className={styles.descover_top}>
          <h2>Discover</h2>
          <div>
            <img src={Arrow_Left} />
            <img src={Arrow_Right} />
          </div>
        </div>
        <div className={styles.discover_slider}>
          <div className={styles.discover_slider_tab}>
            <p>Popular</p>
            <p>Featured</p>
            <p>Most Visited</p>
            <p>Europe</p>
            <p>Asia</p>
          </div>
          <div className={styles.discover_slider_cards}>
            <Link to="/tour/">
              <div className={styles.discover_slider_card}>
                <div className={styles.discover_slider_card_title}>
                  Northern Mountains
                </div>
              </div>
            </Link>
            <Link to="/tour/">
              <div className={styles.discover_slider_card}>
                <div className={styles.discover_slider_card_title}>
                  Northern Mountains
                </div>
              </div>
            </Link>
            <Link to="/tour/">
              <div className={styles.discover_slider_card}>
                <div className={styles.discover_slider_card_title}>
                  Northern Mountains
                </div>
              </div>
            </Link>
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
