import React, { useState } from "react";
import styles from "./Item.module.css";

import { useSelector, useDispatch } from "react-redux";

import { useLocation } from "react-router-dom";

import * as actions from "actions";

const Item = (props) => {
  const { image, price, name, id } = props;

  const location = useLocation().pathname;

  const [isInCart, setIsInCart] = useState(false);

  const productsInCart = useSelector((state) => state.cart.products);
  const productIndexInCart = productsInCart.findIndex(
    (product) => product.id === id
  );

  if (!isInCart && productIndexInCart !== -1) {
    setIsInCart(true);
  } else if (isInCart && productIndexInCart === -1) {
    setIsInCart(false);
  }

  const dispatch = useDispatch();
  const addToCart = (data) => {
    dispatch(actions.addToCart(data));
  };
  const removeFromCart = (product, index) => {
    dispatch(actions.removeFromCart(product, index));
  };

  return (
    <div className={styles.Product}>
      <img className={styles.Image} src={image} alt={name} />
      <p className={styles.Price}>${price}</p>
      <h3>{name}</h3>
      {location !== "/cart" && (
        <button
          className={styles.AddButton}
          onClick={() => {
            addToCart(props);
            setIsInCart(true);
          }}
        >
          ADD TO CART
        </button>
      )}
      {isInCart && (
        <button
          className={styles.RemoveButton}
          onClick={() => {
            removeFromCart(props, productIndexInCart);
            setIsInCart(false);
          }}
        >
          REMOVE
        </button>
      )}
    </div>
  );
};

export default Item;
