import { createSlice } from "@reduxjs/toolkit";


const   initialState= {
    orders: [],
  }

const orderSlice = createSlice({
  name: "orders",
  initialState,

  reducers: {
    addProducts(state, action) {
      state.orders.push(action.payload);
    },
  },
});

export const { addProducts } = orderSlice.actions;
export default orderSlice.reducer;
