import { combineReducers, configureStore } from "@reduxjs/toolkit";
import products from "./features/products";
import orders from "./features/orders";


const rootReducer = combineReducers({
    products: products,
    orders: orders,
})
export const store = configureStore({
    reducer: rootReducer
});
