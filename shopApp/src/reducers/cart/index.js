import { ACTION_TYPES } from "actions";

export default (state = { quantity: 0, amount: 0, products: [] }, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_TO_CART:
      return {
        ...state,
        quantity: state.quantity + 1,
        amount: state.amount + parseInt(action.payload.price),
        products: [...state.products, action.payload],
      };

    case ACTION_TYPES.REMOVE_FROM_CART:
      return {
        ...state,
        quantity: state.quantity - 1,
        amount: state.amount - parseInt(action.payload.price),
        products: [
          ...state.products.slice(0, action.index),
          ...state.products.slice(action.index + 1),
        ],
      };

    default:
      return state;
  }
};
