import React from "react";

import { useSelector, useDispatch } from "react-redux";

import * as actions from "actions";

const InputField = ({ id, manufacturer }) => {
  const currentBrand = useSelector((state) => state.search.brand);

  const dispatch = useDispatch();

  const setBrand = (data) => {
    dispatch(actions.setBrand(data));
  };

  return (
    <div>
      <input
        type="radio"
        name="manufacturere"
        id={id}
        value={manufacturer}
        checked={manufacturer === currentBrand}
        onChange={() => setBrand(manufacturer)}
      />
      <label htmlFor={id}>{id}</label>
    </div>
  );
};

export default InputField;
