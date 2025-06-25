import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CREATE_ORDER, DELETE_USER_CART, EMPTY_USER_CART, FORGOT_PASSWORD, GET_USER_CART, GET_USER_ORDERS, LOGIN_USER, REGISTER_USER, RESET_PASSWORD, UPDATE_PRODUCT_CART, UPDATE_USER, USER_ADD_TO_CART, USER_WISHLIST } from "../../../app-constants";
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

export const registerUser = createAsyncThunk(

    REGISTER_USER,
    async (userData, thunkAPI) => {
        try {
            const response = await userService.registerUser(userData);

            // ✅ Handle based on status
            if (response.status === 201) {
                return response.data; // success
            }

            // If status is not 201, treat as error
            const message = response?.data?.message || 'Registration failed.';
            return thunkAPI.rejectWithValue(message);

        } catch (error) {
            // ✅ Handle Axios/network errors
            const message = error?.response?.data?.message || error.message || 'Registration failed';
            return thunkAPI.rejectWithValue(message);
        }
    }
);

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

// export const getCart = createAsyncThunk(GET_USER_CART, async (data, thunkAPI) => {

//     try {

//         return await userService.getCart(data);

//     } catch (error) {
//         const message = error.response?.data?.message || error.message || 'Something went wrong';
//         return thunkAPI.rejectWithValue(message);
//     }
// });

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

export const getUserOrders = createAsyncThunk(GET_USER_ORDERS, async (thunkAPI) => {

    try {

        return await userService.getUserOrders();

    } catch (error) {
        const message = error.response?.data?.message || error.message || 'Something went wrong';
        return thunkAPI.rejectWithValue(message);
    }
});

export const updateUser = createAsyncThunk(UPDATE_USER, async (data, thunkAPI) => {

    try {

        return await userService.updateUser(data);

    } catch (error) {
        const message = error.response?.data?.message || error.message || 'Something went wrong';
        return thunkAPI.rejectWithValue(message);
    }
});

export const forgotPassword = createAsyncThunk(FORGOT_PASSWORD, async (data, thunkAPI) => {

    try {

        return await userService.forgotPassword(data);

    } catch (error) {
        const message = error.response?.data?.message || error.message || 'Something went wrong';
        return thunkAPI.rejectWithValue(message);
    }
});

export const resetPassword = createAsyncThunk(RESET_PASSWORD, async (data, thunkAPI) => {

    try {

        return await userService.resetPassword(data);

    } catch (error) {
        const message = error.response?.data?.message || error.message || 'Something went wrong';
        return thunkAPI.rejectWithValue(message);
    }
});

export const emptyCart = createAsyncThunk(EMPTY_USER_CART, async (thunkAPI) => {

    try {

        return await userService.emptyCart();

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

                if (state.isSuccess) {

                    toast.success('Account created successfully!');
                }
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.payload;

                // ✅ Show error toast here

                if (state.isSuccess === false) {
                    toast.error(action.payload || 'Registration failed.');
                }
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

                if (state.isError === true) {
                    toast.error(action?.payload?.response?.data?.message);
                }
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
                    toast.error("Something went wrong!");
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
                    toast.error("Something went wrong!");
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
                    toast.error("Something went wrong!");
                }
            })
            // get user orders 
            .addCase(getUserOrders.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getUserOrders.fulfilled, (state, action) => {

                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.getOrderedProduct = action.payload;
            })
            .addCase(getUserOrders.rejected, (state, action) => {

                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            // update user
            .addCase(updateUser.pending, (state) => {

                state.isLoading = true;
            })
            .addCase(updateUser.fulfilled, (state, action) => {

                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.updatedUser = action.payload;

                if (state.isSuccess === true) {

                    let currentUserData = JSON.parse(localStorage.getItem("customer"));

                    let newUserData = {
                        _id: currentUserData._id,
                        token: currentUserData.token,
                        firstname: action.payload.firstname,
                        lastname: action.payload.lastname,
                        email: action.payload.email,
                        mobile: action.payload.mobile,
                    };

                    localStorage.setItem("customer", JSON.stringify(newUserData));
                    state.user = newUserData;

                    toast.success("Profile updated Successfully!");
                }

            })
            .addCase(updateUser.rejected, (state, action) => {

                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;

                if (state.isSuccess === false) {
                    toast.error("Something went wrong!");
                }
            })
            // forgot password
            .addCase(forgotPassword.pending, (state) => {

                state.isLoading = true;
            })
            .addCase(forgotPassword.fulfilled, (state, action) => {

                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.token = action.payload;
                if (state.isSuccess) {
                    toast.success("Forgot Password Email Sent Successfully!");
                }
            })
            .addCase(forgotPassword.rejected, (state, action) => {

                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;

                if (state.isSuccess === false) {
                    toast.error("Something went wrong!");
                }
            })
            // reset password
            .addCase(resetPassword.pending, (state) => {

                state.isLoading = true;
            })
            .addCase(resetPassword.fulfilled, (state, action) => {

                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.password = action.payload;
                if (state.isSuccess) {
                    toast.success("Password Updated Successfully!");
                }
            })
            .addCase(resetPassword.rejected, (state, action) => {

                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;

                if (state.isSuccess === false) {
                    toast.error("Something went wrong!");
                }
            })
            // empty cart
            .addCase(emptyCart.pending, (state) => {

                state.isLoading = true;
            })
            .addCase(emptyCart.fulfilled, (state, action) => {

                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.emptyCart = action.payload;
                // if (state.isSuccess) {
                //     toast.success("Product deleted from Cart Successfully!");
                // }
            })
            .addCase(emptyCart.rejected, (state, action) => {

                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;

                // if (state.isSuccess === false) {
                //     toast.error("Something went wrong!");
                // }
            })
    }

});

export default authSlice.reducer;