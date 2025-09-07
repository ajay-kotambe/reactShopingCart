import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addProduct: (state) => {},
    removeProduct: (state) => {},
  },
});

export const { addProduct, removeProduct } = CartSlice.actions;
export default CartSlice.reducer;
