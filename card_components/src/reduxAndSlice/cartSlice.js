import { createSlice } from "@reduxjs/toolkit";

const initialState = { cartItems: [] };

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
    },
    remove: (state, action) => {
      const index = state.cartItems.findIndex(item => item.title === action.payload.title);
      console.log(index);

      if (index !== -1) {
        state.cartItems.splice(index, 1);
      }
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, remove } = cartSlice.actions;
