import React from "react";
import styles from "./ColumnLeft.module.css";
import InputField from "pages/CatalogPage/components/InputField/InputField";
import Search from "pages/CatalogPage/components/Search/Search";

const ColumnLeft = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Filter}>
        <Search />
        <h4>Manufacturer</h4>
        <div>
          <InputField id="All" manufacturer="All" />
          <InputField id="Apple" manufacturer="Apple" />
          <InputField id="Dell" manufacturer="Dell" />
          <InputField id="Microsoft" manufacturer="Microsoft" />
          <InputField id="Lenovo" manufacturer="Lenovo" />
          <InputField id="Xiaomi" manufacturer="Xiaomi" />
          <InputField id="Asus" manufacturer="Asus" />
          <InputField id="Intel" manufacturer="Intel" />
          <InputField id="Samsung" manufacturer="Samsung" />
        </div>
      </div>
    </div>
  );
};
export default ColumnLeft;
