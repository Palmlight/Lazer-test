import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "../redux/Cart/CartSlice";
import { loadState } from "./storage";

export const store = configureStore({
  reducer: {
    cart: CartReducer
  },
  preloadedState: loadState()
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
