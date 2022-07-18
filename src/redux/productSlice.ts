import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import Product from "../models/ProductModel";

interface ProductState {
  product?: Product;
}

const initialState: ProductState = {
  product: undefined,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProduct: (state, action: PayloadAction<Product>) => {
      return { ...state, product: action.payload };
    },
  },
});

export const { setProduct } = productSlice.actions;

export const selectProduct = (state: RootState) => state.product.product;

export default productSlice.reducer;