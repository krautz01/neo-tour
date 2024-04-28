import React from "react";
import styles from "./ResultModalWindow.module.css";

export default function ResultModalWindow({ success }) {
  return (
    <div className={styles}>
      <p>
        {success == "confirmed"
          ? "Your trip has been booked!"
          : "The tour can’t be booked"}
      </p>
      <button>Ok</button>
    </div>
  );
}
