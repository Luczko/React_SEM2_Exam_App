import React from "react";
import styles from "./ColumnRight.module.css";
import Item from "components/Item/Item";

import { useSelector } from "react-redux";

const ColumnRight = ({ products }) => {
  const currentInput = useSelector((state) => state.search.inputValue);
  const currentBrand = useSelector((state) => state.search.brand);

  let filteredProducts;

  if (currentBrand === "All") {
    filteredProducts = products;
  } else {
    filteredProducts = products.filter(
      (product) => product.manufacture === currentBrand
    );
  }
  return (
    <div className={styles.Container}>
      <div className={styles.Products}>
        {filteredProducts
          .filter((product) =>
            product.name.toLowerCase().includes(currentInput)
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
    </div>
  );
};
export default ColumnRight;
