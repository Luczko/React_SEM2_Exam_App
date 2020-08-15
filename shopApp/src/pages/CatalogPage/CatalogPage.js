import React from "react";
import styles from "./CatalogPage.module.css";
import ColumnLeft from "pages/CatalogPage/components/ColumnLeft/ColumnLeft";
import ColumnRight from "pages/CatalogPage/components/ColumnRight/ColumnRight";

import { useSelector } from "react-redux";

const CatalogPage = () => {
  const products = useSelector((state) => state.products.items);
  const FETCH = useSelector((state) => state.products.FETCH);

  return (
    <div className={styles.Container}>
      <h1>Catalog</h1>

      {FETCH === "COMPLETE" && (
        <div className={styles.Catalog}>
          <ColumnLeft />
          <ColumnRight products={products} />
        </div>
      )}
    </div>
  );
};
export default CatalogPage;
