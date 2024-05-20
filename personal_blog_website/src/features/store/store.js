import { configureStore } from "@reduxjs/toolkit";
import authStatus from "../store/authSlice";
const store = configureStore({
  reducer: { authStatus },
});

export default store;
