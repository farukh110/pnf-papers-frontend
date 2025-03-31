import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LOGIN_USER, REGISTER_USER } from "../../../app-constants";
import userService from "./userService";

const getUserFromLocalStorage = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;

const initialState = {

    user: getUserFromLocalStorage,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
};

export const registerUser = createAsyncThunk(REGISTER_USER, async (user, thunkAPI) => {

    try {

        return await userService.registerUser(user);

    } catch (error) {

        const message = error.response?.data?.message || error.message || 'Something went wrong';
        return thunkAPI.rejectWithValue(message);

    }
});

export const loginUser = createAsyncThunk(LOGIN_USER, async (user, thunkAPI) => {

    try {

        return await userService.loginUser(user);

    } catch (error) {

        const message = error.response?.data?.message || error.message || 'Something went wrong';
        return thunkAPI.rejectWithValue(message);

    }
});

export const authSlice = createSlice({

    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // register user
        builder
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.createdUser = action.payload;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            // login user
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isError = true;
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
                state.message = "success";
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                state.user = null;
            })
    }

});

export default authSlice.reducer;