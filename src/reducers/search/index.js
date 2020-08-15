import { ACTION_TYPES } from "actions";

export default (state = { brand: "All", inputValue: "" }, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_BRAND:
      return { ...state, brand: action.payload };

    case ACTION_TYPES.SET_INPUT:
      return { ...state, inputValue: action.payload };

    case ACTION_TYPES.CLEAR_FILTER:
      return { ...state, inputValue: "", brand: "All" };

    default:
      return state;
  }
};
