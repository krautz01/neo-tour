import React from "react";
import styles from "./HomePage.module.css";

import LetsGo_Arrow from "../../assets/LetsGo_Arrow.svg";
import Winter from "../../assets/Winter.jpg";
import Arrow_Left from "../../assets/Arrow_Left.svg";
import Arrow_Right from "../../assets/Arrow_Right.svg";

export default function HomePage() {
  return (
    <div className={styles.homePage}>
      <section className={styles.greeting}>
        <div className={styles.greeting_info}>
          <h1>Winter Vacation Trips</h1>
          <div className={styles.greeting_text}>
            Enjoy your winter vacations with warmth and amazing sightseeing on
            the mountains. Enjoy the best experience with us!
          </div>
          <div className={styles.greeting_letsgo}>
            <p>Let's Go!</p>
            <img src={LetsGo_Arrow} />
          </div>
        </div>
        <img className={styles.greeting_img} src={Winter} />
      </section>
      <section className={styles.discover_section}></section>
      <section className={styles.recommended_section}></section>
    </div>
  );
}
