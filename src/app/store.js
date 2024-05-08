import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/userSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    // product: productReducer,
    // brand: brandReducer,
    // enquiry: enquiryReducer,
    // color: colorReducer,
  },
});
