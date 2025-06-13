import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CREATE_ORDER, DELETE_USER_CART, GET_USER_CART, LOGIN_USER, REGISTER_USER, UPDATE_PRODUCT_CART, USER_ADD_TO_CART, USER_WISHLIST } from "../../../app-constants";
import userService from "./userService";
import { toast } from "react-toastify";

const getCustomerFromLocalStorage = localStorage.getItem("customer") ? JSON.parse(localStorage.getItem("customer")) : null;

const initialState = {

    user: getCustomerFromLocalStorage,
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

export const getUserWishlist = createAsyncThunk(USER_WISHLIST, async (thunkAPI) => {

    try {

        return await userService.getUserWishlist();

    } catch (error) {
        const message = error.response?.data?.message || error.message || 'Something went wrong';
        return thunkAPI.rejectWithValue(message);
    }

});

export const addToCart = createAsyncThunk(USER_ADD_TO_CART, async (cartData, thunkAPI) => {

    try {

        return await userService.addToCart(cartData);

    } catch (error) {
        const message = error.response?.data?.message || error.message || 'Something went wrong';
        return thunkAPI.rejectWithValue(message);
    }
});

export const getCart = createAsyncThunk(GET_USER_CART, async (thunkAPI) => {

    try {

        return await userService.getCart();

    } catch (error) {
        const message = error.response?.data?.message || error.message || 'Something went wrong';
        return thunkAPI.rejectWithValue(message);
    }
});

export const removeProductFromCart = createAsyncThunk(DELETE_USER_CART, async (cartId, thunkAPI) => {

    try {

        return await userService.removeProductFromCart(cartId);

    } catch (error) {
        const message = error.response?.data?.message || error.message || 'Something went wrong';
        return thunkAPI.rejectWithValue(message);
    }
});

export const updateProductCart = createAsyncThunk(UPDATE_PRODUCT_CART, async (cartDetail, thunkAPI) => {

    try {

        return await userService.updateProductCart(cartDetail);

    } catch (error) {
        const message = error.response?.data?.message || error.message || 'Something went wrong';
        return thunkAPI.rejectWithValue(message);
    }
});

export const createOrder = createAsyncThunk(CREATE_ORDER, async (orderDetail, thunkAPI) => {

    try {

        return await userService.createOrder(orderDetail);

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
            // wishlist
            .addCase(getUserWishlist.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getUserWishlist.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.wishlist = action.payload;
            })
            .addCase(getUserWishlist.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            // add to cart
            .addCase(addToCart.pending, (state) => {

                state.isLoading = true;
            })
            .addCase(addToCart.fulfilled, (state, action) => {

                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.cartProduct = action.payload;

                if (state.isSuccess) {
                    toast.success("Product Added to Cart");
                }

            })
            .addCase(addToCart.rejected, (state, action) => {

                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            // get cart
            .addCase(getCart.pending, (state) => {

                state.isLoading = true;
            })
            .addCase(getCart.fulfilled, (state, action) => {

                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.cartProducts = action.payload;

            })
            .addCase(getCart.rejected, (state, action) => {

                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            // remove product from cart
            .addCase(removeProductFromCart.pending, (state) => {

                state.isLoading = true;
            })
            .addCase(removeProductFromCart.fulfilled, (state, action) => {

                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.deletedCartProduct = action.payload;
                if (state.isSuccess) {
                    toast.success("Product deleted from Cart Successfully!");
                }
            })
            .addCase(removeProductFromCart.rejected, (state, action) => {

                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;

                if (state.isSuccess === false) {
                    toast.success("Something went wrong!");
                }
            })
            // update product from cart
            .addCase(updateProductCart.pending, (state) => {

                state.isLoading = true;
            })
            .addCase(updateProductCart.fulfilled, (state, action) => {

                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.updatedCartProduct = action.payload;
                if (state.isSuccess) {
                    toast.success("Product updated from Cart Successfully!");
                }
            })
            .addCase(updateProductCart.rejected, (state, action) => {

                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;

                if (state.isSuccess === false) {
                    toast.success("Something went wrong!");
                }
            })
            // create order
            .addCase(createOrder.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createOrder.fulfilled, (state, action) => {

                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.orderedProduct = action.payload;

                if (state.isSuccess) {
                    toast.success("Ordered Successfully!");
                }
            })
            .addCase(createOrder.rejected, (state, action) => {

                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;

                if (state.isSuccess === false) {
                    toast.success("Something went wrong!");
                }
            })
    }

});

export default authSlice.reducer;