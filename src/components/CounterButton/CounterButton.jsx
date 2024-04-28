import React, { useState } from "react";
import styles from "./CounterButton.module.css";
import man from "../../assets/man.svg";

export default function CounterButton({ peopleCount, setPeopleCount }) {
  const handleCountChangePlus = () => {
    peopleCount < 5 && setPeopleCount(peopleCount + 1);
  };
  const handleCountChangeMinus = () => {
    peopleCount > 0 && setPeopleCount(peopleCount - 1);
  };
  return (
    <div className={styles.counter_button_section}>
      <div className={styles.counter_buttons}>
        <button onClick={handleCountChangePlus}>+</button>
        <p>{peopleCount}</p>
        <button onClick={handleCountChangeMinus}>-</button>
      </div>
      <div className={styles.counter_button_people_count}>
        <img src={man} />
        <p>{peopleCount} People</p>
      </div>
    </div>
  );
}
