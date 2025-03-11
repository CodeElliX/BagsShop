import { configureStore } from "@reduxjs/toolkit";
import filter from "./filterSlice";
import backpack from "./productsSlice"
import cart from "./cartSlice"

export const store = configureStore({
    reducer: {
        filter,
        backpack,
        cart
    }
});

export type RootState = ReturnType<typeof store.getState>;