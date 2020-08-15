import React from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

import { useSelector } from "react-redux";

const Menu = () => {
  const cart = useSelector((state) => state.cart);

  const { quantity, amount } = cart;

  return (
    <nav>
      <div className={styles.Container}>
        <ul className={styles.Nav}>
          <li>
            <Link exact to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/catalog">Catalog</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <div className={styles.Cart}>
            Items total: <div className={styles.Status}>{quantity}</div>
            Price total: <div className={styles.Status}>${amount}</div>
            <Link to="/cart">
              <img
                src={
                  "https://image.made-in-china.com/2f0j00aKFTrOtWHboh/2017-60-210L-Supermarket-Shopping-Cart-Handle-Wheels-Baby-Seat.jpg"
                }
              />
            </Link>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
