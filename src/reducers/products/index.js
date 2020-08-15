import { ACTION_TYPES } from "actions";

export default (state = { items: null, FETCH: "LOADING" }, action) => {
  switch (action.type) {
    case ACTION_TYPES.GET_PRODUCTS_REQUESTED:
      return { ...state, FETCH: "LOADING" };

    case ACTION_TYPES.GET_PRODUCTS_COMPLETE:
      return { ...state, FETCH: "COMPLETE", items: action.payload };

    case ACTION_TYPES.GET_PRODUCTS_FAIL:
      return { ...state, FETCH: "FAIL" };

    default:
      return state;
  }
};
