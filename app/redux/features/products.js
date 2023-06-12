import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: { value: [] },

  reducers: {
    addProducts(state, action){
      state.value= action.payload;

      
    },
  },
});

export const selectProducts = (state) => state.products.value;
export const { addProducts } = productSlice.actions;
export default productSlice.reducer;
