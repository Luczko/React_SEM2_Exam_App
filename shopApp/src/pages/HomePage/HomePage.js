import React from "react";
import styles from "./HomePage.module.css";
import FeaturedProducts from "pages/HomePage/components/FeaturedProducts/FeaturedProducts";

import { useSelector } from "react-redux";

const HomePage = () => {
  const products = useSelector((state) => state.products.items);
  const FETCH = useSelector((state) => state.products.FETCH);

  return (
    <div className={styles.Container}>
      <h1>Welcome to our store</h1>

      <h2>Desktops</h2>
      {FETCH === "COMPLETE" && (
        <FeaturedProducts products={products} category={"desktop"} />
      )}

      <h2>Tablets</h2>
      {FETCH === "COMPLETE" && (
        <FeaturedProducts products={products} category={"tablet"} />
      )}
    </div>
  );
};

export default HomePage;
