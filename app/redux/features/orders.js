import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
};

const orderSlice = createSlice({
  name: "orders",
  initialState,

  reducers: {
    addOrder(state, action) {
      const item = state.orders.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.orders.push(action.payload);
      }
    },
    removeOrder(state, action) {
      let index = state.orders.findIndex((item) => item.id == action.payload);
      state.orders.splice(index, 1);
    },
    resetAllOrder(state) {
      state.orders = [];
    },
  },
});

export const { addOrder, removeOrder, resetAllOrder } = orderSlice.actions;
export default orderSlice.reducer;
