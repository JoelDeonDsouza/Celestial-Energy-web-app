import { configureStore } from "@reduxjs/toolkit";
import energyReducer from "../features/Celestial-Data/celestial";

export const store = configureStore({
  reducer: {
    hydro: energyReducer,
  },
});
