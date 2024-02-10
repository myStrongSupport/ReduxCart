import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isVisibleCart: true,
  notifiction: null,
};

const uiSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    toggle(state) {
      state.isVisibleCart = !state.isVisibleCart;
    },
    notify(state, action) {
      state.notifiction = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});
export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
