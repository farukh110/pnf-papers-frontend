import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import contactService from "./contactService";
import { RESET_ALL, SEND_ENQUIRY } from "../../../app-constants";

const initialState = {
    contact: "",
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
};

// send query

export const sendQuery = createAsyncThunk(SEND_ENQUIRY, async (data, thunkAPI) => {

    try {

        const response = await contactService.sendQuery(data);
        return response;

    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }

});

export const resetState = createAction(RESET_ALL);

// product slice

export const contactSlice = createSlice({

    name: "contact",
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder
            // send query
            .addCase(sendQuery.pending, (state) => {

                state.isLoading = true;

            })
            .addCase(sendQuery.fulfilled, (state, action) => {

                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.contact = action.payload;
            })
            .addCase(sendQuery.rejected, (state, action) => {

                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.payload;
            })
            .addCase(resetState, () => initialState);

    }
});

export default contactSlice.reducer; 
