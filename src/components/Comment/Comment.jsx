import React from "react";
import styles from "./Comment.module.css";
import user_comment_image from "../../assets/user_comment_image.jpg";

export default function Comment({ reviews }) {
  return (
    <div className={styles.comment}>
      <div className={styles.comment_top}>
        <img src={reviews.photo || user_comment_image} alt="user photo"/>
        <p>{reviews.nickname}</p>
      </div>
      <div className={styles.comment_text}>{reviews.comment}</div>
    </div>
  );
}
