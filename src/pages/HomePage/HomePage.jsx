import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import styles from "./HomePage.module.css";

import LetsGo_Arrow from "../../assets/LetsGo_Arrow.svg";
import Winter from "../../assets/Winter.svg";
import Arrow_Left from "../../assets/Arrow_Left.svg";
import Arrow_Right from "../../assets/Arrow_Right.svg";

import DiscoverCard from "../../components/DiscoverCard/DiscoverCard";
import RecommendedCard from "../../components/RecommendedCard/RecommendedCard";
import CardSlider from "../../components/CardSlider/CardSlider";

export default function HomePage() {
  const [tours, setTours] = useState([]);
  const [categories, setCategories] = useState([]);
  const [recommendedTours, setRecommendedTours] = useState([]);
  const [activeCategory, setActiveCategory] = useState("Popular");
  const [sortedTours, setSortedTours] = useState([]);

  const ref = useRef(null);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await axios.get(
          "https://kunasyl-backender.org.kg/api/tours/"
        );
        setTours(response.data);
        const newTours = tours.filter(
          (sortedTour) => sortedTour.category.name == activeCategory
        );
        setSortedTours(newTours);
        console.log(sortedTours)
      } catch (error) {
        console.log("Error fetching tours");
      }
    };
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://kunasyl-backender.org.kg/api/categories/"
        );
        setCategories(response.data);
      } catch (error) {
        console.log("Error fetching categories");
      }
    };
    const fetchRecommendedTours = async () => {
      try {
        const response = await axios.get(
          "https://kunasyl-backender.org.kg/api/tours/"
        );
        const resp = response.data;
        const newResps = resp.filter((newResp) => newResp.recommended);
        setRecommendedTours(newResps);
      } catch (error) {
        console.log("Error fetching recommended tours");
      }
    };
    fetchTours();
    fetchCategories();
    fetchRecommendedTours();
  }, []);

  const handleScroll = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleChangeCategory = (category) => {
    setActiveCategory(null);
    setActiveCategory(category.name);
    console.log(activeCategory);
  };

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
            {categories.map((category) => (
              <p
                key={category.id}
                className={styles.discover_slider_tab}
                onClick={() => handleChangeCategory(category)}
              >
                {category.name}
              </p>
            ))}
          </div>
          <div className={styles.discover_slider_cards}>
            {sortedTours.map((tour) => (
              <DiscoverCard tour={tour} key={tour.id} />
            ))}
          </div>
        </div>
      </section>
      <section className={styles.recommended_section}>
        <h2>Recommended</h2>
        <div className={styles.recommended_cards}>
          {recommendedTours.map((recommendedTour) => (
            <RecommendedCard
              recommendedTour={recommendedTour}
              key={recommendedTour.id}
            />
          ))}
        </div>
      </section>
      <CardSlider />
    </div>
  );
}
