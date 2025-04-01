import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../api/user/userSlice";
import productReducer from "../api/product/productSlice";

export const store = configureStore({

    reducer: {
        auth: authReducer,
        product: productReducer
    }
});