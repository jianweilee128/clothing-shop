import CartActionTypes from "./cart.types";

export const toggleCartDropdown = () => ({
  type: CartActionTypes.TOGGLE_CART_DROPDOWN,
});

export const addItem = (item) => ({
  type: CartActionTypes.ADD_CART_ITEM,
  payload: item,
});

export const deleteItem = (item) => ({
  type: CartActionTypes.DELETE_CART_ITEM,
  payload: item,
});

export const removeItem = (item) => ({
  type: CartActionTypes.REMOVE_CART_ITEM,
  payload: item,
});
