import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { REGISTER_USER } from "../../../app-constants";
import userService from "./userService";

const initialState = {

    user: "",
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
};

export const registerUser = createAsyncThunk(REGISTER_USER, async (user, thunkAPI) => {

    try {

        return await userService.registerUser(user);

    } catch (error) {

        return thunkAPI.rejectWithValue(error);
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
                state.user = action.payload;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
    }

});

export default authSlice.reducer;