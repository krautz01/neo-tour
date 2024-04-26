import React, { useState } from "react";
import styles from "./ModalWindow.module.css";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import CounterButton from "../CounterButton/CounterButton";

export default function ModalWindow({ active, setActive }) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [succes, setSucces] = useState(false);

  const handleChangeSuccess = () => {
    setSucces(true);
  };
  return (
    <div className={styles.modal_window} onClick={() => setActive(false)}>
      <div
        className={styles.modal_window_content}
        onClick={(e) => e.stopPropagation()}
      >
        <h2>Info</h2>
        <p className={styles.modal_window_content_text}>
          To submit an application for a tour reservation, you need to fill in
          your information and select the number of people for the reservation
        </p>
        <div className={styles.modal_window_content_number}>
          <p>Phone number</p>
          <PhoneInput
            containerClass={styles.dropdown}
            country={"kg"}
            value={phoneNumber}
            onChange={(phone) => setPhoneNumber(phone)}
            inputClass={styles.modal_window_content_number_input}
            inputStyle={{ borderRadius: "3rem" }}
            dropdownClass={styles.modal_window_content_number_dropdown}
          />
        </div>
        <div className={styles.modal_window_content_number}>
          <p>Commentaries to trip</p>
          <input className={styles.modal_window_content_number_input} />
        </div>
        <div className={styles.modal_window_content_number}>
          <p>Commentaries to trip</p>
          <CounterButton />
        </div>
        <button onClick={() => handleChangeSuccess()}>Submit</button>
      </div>
    </div>
  );
}
