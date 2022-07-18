import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { barcodeSlice } from "./barcodeSlice";
import {productSlice} from "./productSlice";

const rootReducer = combineReducers({});

const Store = configureStore({
  reducer: {
    barcode: barcodeSlice.reducer,
    product: productSlice.reducer,
  },
});

export type RootState = ReturnType<typeof Store.getState>;

export type AppDispatch = typeof Store.dispatch;

export default Store;
