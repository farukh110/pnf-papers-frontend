import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { blogService } from "./blogService";
import { GET_ALL_BLOGS, GET_BLOG } from "../../../app-constants";

const initialState = {

    blogs: [],
    blogDetail: null,
    totalRecords: 0,
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: ""

};

export const getAllBlogs = createAsyncThunk(GET_ALL_BLOGS, async (thunkAPI) => {

    try {

        const response = await blogService.getAllBlogs();

        return response;

    } catch (error) {

        return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
});

export const getBlog = createAsyncThunk(GET_BLOG, async (blogId, thunkAPI) => {

    try {

        const response = await blogService.getBlog(blogId);

        return response;

    } catch (error) {

        return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
});

export const blogSlice = createSlice({

    name: "blogs",
    initialState,
    extraReducers: (builder) => {

        builder
            // get all blogs
            .addCase(getAllBlogs.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllBlogs.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.blogs = action.payload;
            })
            .addCase(getAllBlogs.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            // get blog
            .addCase(getBlog.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getBlog.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.blogDetail = action.payload;
            })
            .addCase(getBlog.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
    }
});

export default blogSlice.reducer;