import React from "react";
import Item from "components/Item/Item";
import styles from "./CartPage.module.css";

import { useSelector } from "react-redux";

const CartPage = () => {
  const products = useSelector((state) => state.cart.products);

  return (
    <div className={styles.Container}>
      <h1>CART</h1>
      <div className={styles.Products}>
        {products.map((product) => (
          <Item
            key={product.id}
            image={product.image}
            price={product.price}
            name={product.name}
            id={product.id}
          />
        ))}
      </div>
    </div>
  );
};

export default CartPage;
