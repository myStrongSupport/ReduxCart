import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  changed: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      state.changed = true;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          quantity: 1,
          totalAmount: newItem.price,
          price: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalAmount =
          existingItem.totalAmount + existingItem.price;
      }
    },
    removeItemToCart(state, actions) {
      const id = actions.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      state.changed = true;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => {
          return item.id !== id;
        });
      } else {
        existingItem.quantity--;
        existingItem.totalAmount =
          existingItem.totalAmount - existingItem.price;
      }
    },
    replaceCart(state, action) {
      state.items = action.payload.items;
      state.totalQuantity = action.payload.totalQuantity;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
