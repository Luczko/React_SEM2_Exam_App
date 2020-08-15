import React from "react";

import styles from "./NotFound.module.css";

const NoMatchPage = () => (
  <div>
    <img
      className={styles.Image}
      src={
        "https://i.pinimg.com/originals/77/1e/68/771e684871c63063871faf581efaf569.jpg"
      }
      alt="404 not found"
    />
  </div>
);

export default NoMatchPage;
