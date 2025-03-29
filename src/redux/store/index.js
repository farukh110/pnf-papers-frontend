import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../api/user/userSlice";

export const store = configureStore({

    reducer: {
        auth: authReducer
    }
});