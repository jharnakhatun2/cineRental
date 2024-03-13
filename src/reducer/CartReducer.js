const initialState = {
  cartData: [],
};
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartData: [...state.cartData, action.payload],
      };

    case "REMOVE_CART": {
      const filtered = state.cartData.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        cartData: filtered,
      };
    }
    default: {
      return state;
    }
  }
};
export { cartReducer, initialState };
