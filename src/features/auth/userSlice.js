import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "./userService";
import toast, { Toaster } from 'react-hot-toast';

const getUserfromLocalStorage = localStorage.getItem("customer")
    ? JSON.parse(localStorage.getItem("customer"))
    : null;
const initialState = {
    customer: getUserfromLocalStorage,
    orders: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
};

export const userLogin = createAsyncThunk(
    "auth/login",
    async (userData, thunkAPI) => {
        try {
            return await userService.userLogin(userData);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const registerUser = createAsyncThunk(
    "auth/create-user",
    async (userData, thunkAPI) => {
        try {
            return await userService.createUser(userData);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);



export const userSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {},
    extraReducers: (buildeer) => {
        buildeer
            .addCase(userLogin.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(userLogin.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.isSuccess = true;
                state.customer = action.payload;
                state.message = "success";
            })
            .addCase(userLogin.rejected, (state, action) => {
                state.isError = true;
                state.isSuccess = false;
                if (state.isError) {
                    const errorMessage = action.payload.response.data.message;
                    toast.error(errorMessage);
                }
                state.isLoading = false;
            })
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.isSuccess = true;
                state.newCustomer = action.payload;
                state.message = "success";
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isError = true;
                state.isSuccess = false;
                if (state.isError) {
                    const errorMessage = action.payload.response.data.message;
                    toast.error(errorMessage);
                }
                state.isLoading = false;
            })
    }
});

export default userSlice.reducer;