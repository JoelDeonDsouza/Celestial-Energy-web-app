import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  energy: ["Home", "About", "Hydro-plant", "Blog", "Contact"],
};

const energySlice = createSlice({
  name: "hydro",
  initialState,
  reducers: {},
});

export const selectEnergy = (state) => state.hydro.energy;

export default energySlice.reducer;
