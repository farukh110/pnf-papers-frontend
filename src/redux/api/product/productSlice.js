import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productService from './productService';
import { ADD_TO_WISHLIST, GET_ALL_PRODUCTS, GET_PRODUCT, RESET_ALL } from './../../../app-constants/index';

const initialState = {
    product: "",
    products: [],
    createProduct: "",
    totalRecords: 0, // Add this to store the total records count
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
};

// get all products

export const getAllProducts = createAsyncThunk(GET_ALL_PRODUCTS, async (thunkAPI) => {

    try {

        const response = await productService.getAllProducts();
        return response;

    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }

});

// get product

export const getProduct = createAsyncThunk(GET_PRODUCT, async (productId, thunkAPI) => {

    try {

        const response = await productService.getProduct(productId);
        return response;

    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }

});

// add to wishlist

export const addToWishlist = createAsyncThunk(ADD_TO_WISHLIST, async (productId, thunkAPI) => {

    try {

        const response = await productService.addToWishlist(productId);
        return response;

    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }

});

export const resetState = createAction(RESET_ALL);

// product slice

export const productSlice = createSlice({

    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder
            // get all products
            .addCase(getAllProducts.pending, (state) => {

                state.isLoading = true;

            })
            .addCase(getAllProducts.fulfilled, (state, action) => {

                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.product = action.payload.data;
                state.totalRecords = action.payload.totalRecords;
            })
            .addCase(getAllProducts.rejected, (state, action) => {

                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.payload;
            })
            // get product
            .addCase(getProduct.pending, (state) => {

                state.isLoading = true;

            })
            .addCase(getProduct.fulfilled, (state, action) => {

                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.productDetails = action.payload;
            })
            .addCase(getProduct.rejected, (state, action) => {

                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            // add to wishlist
            .addCase(addToWishlist.pending, (state) => {

                state.isLoading = true;

            })
            .addCase(addToWishlist.fulfilled, (state, action) => {

                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.addToWishlist = action.payload;
                state.message = "Product Added to Wishlist";

            })
            .addCase(addToWishlist.rejected, (state, action) => {

                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(resetState, () => initialState);

    }
});

export default productSlice.reducer; 
