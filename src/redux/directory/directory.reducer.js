import SHOP_DATA from "../shop.data";

const INITIAL_STATE = {
  SHOP_DATA: SHOP_DATA,
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
