export const ACTION_TYPES = {
  GET_PRODUCTS_REQUESTED: "GET_PRODUCTS_REQUESTED",
  GET_PRODUCTS_COMPLETE: "GET_PRODUCTS_COMPLETE",
  GET_PRODUCTS_FAIL: "GET_PRODUCTS_FAIL",
  SET_BRAND: "SET_BRAND",
  SET_INPUT: "SET_INPUT",
  CLEAR_FILTER: "CLEAR_FILTER",
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
};

// Do reduktora koszyka
export const addToCart = (data) => ({
  type: ACTION_TYPES.ADD_TO_CART,
  payload: data,
});

export const removeFromCart = (data, index) => ({
  type: ACTION_TYPES.REMOVE_FROM_CART,
  payload: data,
  index: index,
});

// Do reduktora produktów (pobieranie z api)
export const getProductsRequested = () => ({
  type: ACTION_TYPES.GET_PRODUCTS_REQUESTED,
});

export const getProductsComplete = (data) => ({
  type: ACTION_TYPES.GET_PRODUCTS_COMPLETE,
  payload: data,
});

export const getProductsFail = (error) => ({
  type: ACTION_TYPES.GET_PRODUCTS_ERROR,
  payload: error,
});

// Do reduktora wyszukiwarki
export const setBrand = (data) => ({
  type: ACTION_TYPES.SET_BRAND,
  payload: data,
});

export const setInput = (data) => ({
  type: ACTION_TYPES.SET_INPUT,
  payload: data,
});

export const clearFilter = () => ({
  type: ACTION_TYPES.CLEAR_FILTER,
});

// Pobranie produktów
export const getProducts = () => {
  return async (dispatch) => {
    try {
      dispatch(getProductsRequested());
      const response = await fetch(
        "http://jsdeveloper-shop-api.s3-website-eu-west-1.amazonaws.com"
      );
      const data = await response.json();

      dispatch(getProductsComplete(data));
    } catch (error) {
      dispatch(getProductsFail(error));
    }
  };
};
