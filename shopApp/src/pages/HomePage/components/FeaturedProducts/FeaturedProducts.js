import React from "react";
import styles from "./FeaturedProducts.module.css";
import Item from "components/Item/Item";

const FeaturedProducts = ({ products, category }) => {
  return (
    <div className={styles.Products}>
      {products
        .filter(
          (product) =>
            product.featured === true && product.category === category
        )
        .map((product) => (
          <Item
            key={product.id}
            image={product.image}
            price={product.amount}
            name={product.name}
            id={product.id}
          />
        ))}
    </div>
  );
};

export default FeaturedProducts;
