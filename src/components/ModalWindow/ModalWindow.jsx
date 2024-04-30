import React, { useState } from "react";
import styles from "./ModalWindow.module.css";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import CounterButton from "../CounterButton/CounterButton";
import axios from "axios";

export default function ModalWindow({
  active,
  setActive,
  tourDatas,
  setSuccess,
  id,
}) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [commentToTrip, setCommentToTrip] = useState("");
  const [peopleCount, setPeopleCount] = useState(1);
  const [userName, setUserName] = useState("");

  const handleBookTour = () => {
    let obj = {
      tour: tourDatas.id,
      full_name: userName,
      phone_number: phoneNumber,
      number_of_people: peopleCount,
      additional_comments: commentToTrip,
    };
    /* 
    if (phoneNumber !== "") {
      setSuccess("confirmed");
      setActive(false);
    } else {
      setSuccess("cancelld");
      setActive(false);
    } */

    bookTour(obj);
    setCommentToTrip("");
    setPeopleCount(0);
    setPhoneNumber("");
  };

  async function bookTour(tour) {
    try {
      let res = await axios.post(
        `https://kunasyl-backender.org.kg/api/bookings/`,
        tour
      );
      console.log(`"This is post " ${res}`);
    } catch (error) {
      ("Fail errrrrrrrrrrrrrrrrrrror");
    }
  }

  const handleChangePhoneNumber = (phone) => {
    if (phone.length == 12) {
      setPhoneNumber(
        `+${phone.toString().slice(0, 3)}-${phone
          .toString()
          .slice(3, 6)}-${phone.toString().slice(6)}`
      );
      console.log(phoneNumber);
    }
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
            onChange={(phone) => handleChangePhoneNumber(phone)}
            inputClass={styles.modal_window_content_number_input}
            inputStyle={{ borderRadius: "3rem" }}
            dropdownClass={styles.modal_window_content_number_dropdown}
          />
        </div>
        <div className={styles.modal_window_content_number}>
          <p>Commentaries to trip</p>
          <input
            placeholder="Write your wishes to trip..."
            onChange={(e) => setCommentToTrip(e.target.value)}
          />
          {/*  <input
            placeholder="Enter yout name"
            onChange={(e) => setUserName(e.target.value)}
          /> */}
        </div>
        <div className={styles.modal_window_content_number}>
          <p>Commentaries to trip</p>
          <CounterButton
            peopleCount={peopleCount}
            setPeopleCount={setPeopleCount}
          />
        </div>
        <button onClick={() => handleBookTour()}>Submit</button>
      </div>
    </div>
  );
}
