import React from "react";
import styles from "./ResultModalWindow.module.css";

export default function ResultModalWindow({success}) {
  return (
    <div className={styles}>
      <p>
        {success ? "Your trip has been booked!" : "The tour can’t be booked"}Your
        trip has been booked!
      </p>
      <button>Ok</button>
    </div>
  );
}
