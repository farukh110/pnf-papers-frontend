import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../api/user/userSlice";
import productReducer from "../api/product/productSlice";
import blogReducer from "../api/blogs/blogSlice";

export const store = configureStore({

    reducer: {
        auth: authReducer,
        product: productReducer,
        blogs: blogReducer
    }
});