import React from "react";
import styles from "./Search.module.css";

import { useSelector, useDispatch } from "react-redux";

import * as actions from "actions";

const Search = () => {
  const currentInput = useSelector((state) => state.search.inputValue);

  const dispatch = useDispatch();

  const clearFilter = (e) => {
    e.preventDefault();
    dispatch(actions.clearFilter());
  };
  const setInput = (data) => dispatch(actions.setInput(data));

  return (
    <div>
      <div className={styles.Search}>
        <h4>Search</h4>
        <a className={styles.Clear} href="#" onClick={clearFilter}>
          Clear
        </a>
      </div>
      <div>
        <input
          value={currentInput}
          type="text"
          placeholder="search..."
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
