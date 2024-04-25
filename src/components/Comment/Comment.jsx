import React from "react";
import styles from "./Comment.module.css";
import user_comment_image from "../../assets/user_comment_image.jpg";

export default function Comment() {
  return (
    <div className={styles.comment}>
      <div className={styles.comment_top}>
        <img src={user_comment_image} />
        <p>Name</p>
      </div>
      <div className={styles.comment_text}>
        That was such a nice place. The most beautiful place I’ve ever seen. My
        advice to everyone not to forget to take warm coat
      </div>
    </div>
  );
}
